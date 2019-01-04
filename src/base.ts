import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyBXAseu07TTw9Yueg8MoeLhiXl_FvZxTAg',
	authDomain: 'weightlift-tracker.firebaseapp.com',
	databaseURL: 'https://weightlift-tracker.firebaseio.com',
	storageBucket: 'weightlift-tracker.appspot.com',
	messagingSenderId: '613587235450'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
