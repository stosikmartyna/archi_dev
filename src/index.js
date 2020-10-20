import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';

firebase.initializeApp({
  apiKey: "AIzaSyBnVf4mKXtz5d0dgQGX5nX_ydsUH4IqTFA",
  authDomain: "archi-dev.firebaseapp.com",
  databaseURL: "https://archi-dev.firebaseio.com",
  projectId: "archi-dev",
  storageBucket: "archi-dev.appspot.com",
  messagingSenderId: "518315362308",
  appId: "1:518315362308:web:f8ec564845b40de1a30d51"
});

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
);