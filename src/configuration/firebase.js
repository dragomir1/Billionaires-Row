import * as firebase from 'firebase';
import 'firebase/auth'; //do i need to import this? remove if not needed.

const firebaseConfig = {
  apiKey: 'AIzaSyACxHDQK0uWmtGWVqWX4Okq7q8JuHq-Hvs',
  authDomain: 'billionaires-row.firebaseapp.com',
  databaseURL: 'https://billionaires-row.firebaseio.com',
  projectId: 'billionaires-row',
  storageBucket: '',
  messagingSenderId: '966284494099',
  appId: '1:966284494099:web:888cd49bc8d3e961'
};

firebase.initializeApp(firebaseConfig);
