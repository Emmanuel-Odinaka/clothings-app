import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCIEKHOqPN5hkXTJ5znlFGK1Uf11-bdyrM",
    authDomain: "clothings-db.firebaseapp.com",
    databaseURL: "https://clothings-db.firebaseio.com",
    projectId: "clothings-db",
    storageBucket: "clothings-db.appspot.com",
    messagingSenderId: "606084643456",
    appId: "1:606084643456:web:0c07037746e1cbdbb78465",
    measurementId: "G-RFTEKZEC7W"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;