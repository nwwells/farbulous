import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/firebase-browser';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

let database;
export const init = () => {
  let config = {
    apiKey: 'AIzaSyCSiH71tOgZxnsILhcoa5bl4hzxxyGUNeo',
    authDomain: 'farbulous-fb735.firebaseapp.com',
    databaseURL: 'https://farbulous-fb735.firebaseio.com',
    projectId: 'farbulous-fb735',
    storageBucket: 'farbulous-fb735.appspot.com',
    messagingSenderId: '1004417905489'
  };
  firebase.initializeApp(config);
  database = firebase.database();
};
