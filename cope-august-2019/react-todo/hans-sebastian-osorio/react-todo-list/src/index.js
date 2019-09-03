import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var todoListInit = [
    { title: 'Wake up', state: 'init', id: 1 },
    { title: 'Tidy room', state: 'init', id: 2 },
    { title: 'Take a shower', state: 'init', id: 3 },
    { title: 'Prepare breakfast', state: 'init', id: 4 }
]
ReactDOM.render(<App initList={todoListInit}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
