import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts/stylesheet.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import notificationBootstrap, { displayNotification, subscribeUser } from './notification';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  window.MY_DEFERED_PROMPT_EVENT = e;
});

serviceWorker.register();
