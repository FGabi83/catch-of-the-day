import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDQJwn7deqigQ_Rr8kVrc64mPnCsf6wGgc",
  authDomain: "catch-of-the-day-farkas-gabi.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-farkas-gabi-default-rtdb.europe-west1.firebasedatabase.app"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export 
export default base;