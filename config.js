
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD-d1QQG5DKqIHFg6CCpRzKDnaPiXmL35c",
  authDomain: "temphum-pro.firebaseapp.com",
  databaseURL: "https://temphum-pro-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "temphum-pro",
  storageBucket: "temphum-pro.appspot.com",
  messagingSenderId: "829294730281",
  appId: "1:829294730281:web:4a1d5f255716a08212d038"
};

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const db = getDatabase()

export { db }


// const app = initializeApp(firebaseConfig);
