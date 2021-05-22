import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAADo0cG1ToVox9jTimHE1szjYW9Rq_vzc",
  authDomain: "signal-clone-21658.firebaseapp.com",
  projectId: "signal-clone-21658",
  storageBucket: "signal-clone-21658.appspot.com",
  messagingSenderId: "952022102673",
  appId: "1:952022102673:web:133b02d8f78954d3580530",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
