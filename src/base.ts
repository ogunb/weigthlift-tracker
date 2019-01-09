import Rebase from 're-base';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyBXAseu07TTw9Yueg8MoeLhiXl_FvZxTAg',
	authDomain: 'weightlift-tracker.firebaseapp.com',
	databaseURL: 'https://weightlift-tracker.firebaseio.com',
	storageBucket: 'weightlift-tracker.appspot.com',
	messagingSenderId: '613587235450'
});

const base = Rebase.createClass(firebaseApp.database());

const authProvider = new firebase.auth.GoogleAuthProvider();

export { firebaseApp, authProvider };
export default base;
