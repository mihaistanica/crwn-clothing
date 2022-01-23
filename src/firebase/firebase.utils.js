import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyC7eIMib_PwQfiLQQNcJFcekrJt3XN9LqQ",
  authDomain: "crwn-db-47dc7.firebaseapp.com",
  projectId: "crwn-db-47dc7",
  storageBucket: "crwn-db-47dc7.appspot.com",
  messagingSenderId: "173290989504",
  appId: "1:173290989504:web:819f429b483a14c1294a25",
  measurementId: "G-VZSSQQDWZ0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
