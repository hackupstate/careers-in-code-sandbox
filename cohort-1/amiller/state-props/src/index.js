import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ScoreInput from './ScoreInput';
import ScoreTable from './ScoreTable';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ScoreInput />, document.getElementById('root'));
ReactDOM.render(<ScoreTable scoreList={[0, 4, 5]}/>, document.getElementById('other'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
