import firebase from 'firebase/app';
import 'firebase/database';
//import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAC12Axc_PTHyQuIYLzn9PBH-RUcHDd39s',
  authDomain: 'kdz-lotek.firebaseapp.com',
  databaseURL: 'https://kdz-lotek.firebaseio.com',
  projectId: 'kdz-lotek',
  storageBucket: 'kdz-lotek.appspot.com',
  messagingSenderId: '44083226615',
  appId: '1:44083226615:web:270f6d425a77d257bb30f2',
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
//export const auth = firebase.auth();
