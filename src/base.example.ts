import Rebase from 're-base';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
	// apiKey:
	// authDomain:
	// databaseURL:
	// storageBucket:
	// messagingSenderId:
});

const base = Rebase.createClass(firebaseApp.database());

const authProvider = new firebase.auth.GoogleAuthProvider();

export { firebaseApp, authProvider };
export default base;
