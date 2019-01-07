import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';

export class AddWorkout extends Component {
	render() {
		return (
			<>
				<Header />
				<div className="container">
					<h3 className="text-center">Yeni Egzersiz</h3>
					<form>
						<input type="text" />
					</form>
				</div>
				<Nav />
			</>
		);
	}
}

export default AddWorkout;
