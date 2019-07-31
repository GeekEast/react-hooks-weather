import React from 'react';
import ReactDOM from 'react-dom';
import useLocation from './useLocation';

const App = () => {
	return <div className="border red">{useLocation()}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
