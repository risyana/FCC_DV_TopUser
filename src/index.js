import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title="Freecodecamp Leaderboard" />, document.getElementById('root'));
registerServiceWorker();

if (module.hot){
	module.hot.accept();
}