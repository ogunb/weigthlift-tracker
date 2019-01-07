import React, { Component } from 'react';
import firebase from 'firebase';

type LoginProp = {
	handleClick: () => void;
};

export function Login(props: LoginProp) {
	const { handleClick } = props;
	return (
		<button onClick={handleClick} className="btn btn-primary loading">
			Login with Google
		</button>
	);
}

export default Login;
