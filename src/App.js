import React from 'react';
import firebase from 'firebase';
import { UserAuthView } from './views/UserAuthView';
import './App.css';

export const App = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyBnVf4mKXtz5d0dgQGX5nX_ydsUH4IqTFA",
    authDomain: "archi-dev.firebaseapp.com",
    databaseURL: "https://archi-dev.firebaseio.com",
    projectId: "archi-dev",
    storageBucket: "archi-dev.appspot.com",
    messagingSenderId: "518315362308",
    appId: "1:518315362308:web:f8ec564845b40de1a30d51"
  });

  return (
    <UserAuthView />
  );
}