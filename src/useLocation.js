import React, { useEffect, useState } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const useLocation = () => {
	const [ lat, setLat ] = useState(null);
	const [ errMessage, setErrMessage ] = useState('');
	useEffect(() => {
		window.navigator.geolocation.getCurrentPosition(
			(position) => setLat(position.coords.latitude),
			(err) => setErrMessage(err.message)
		);
	}, []);

	if (errMessage && !lat) {
		return <div>Error: {errMessage}</div>;
	}

	if (!errMessage && lat) {
		return <SeasonDisplay lat={lat} />;
	}
	return <Spinner message="Please accept location request" />;
};

export default useLocation;
