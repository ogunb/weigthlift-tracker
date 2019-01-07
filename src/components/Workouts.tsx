import React, { Component } from 'react';
import { Provider } from '../context';
import WorkoutList from './WorkoutList';
import Nav from './Nav';
import Header from './Header';

function Workouts() {
	return (
		<Provider>
			<div className="App container-fluid">
				<div className="container">
					<Header />
					<h2 className="mb-3 mt-4 text-center">Tüm Antrenmanlar</h2>
					<WorkoutList />
				</div>
				<Nav />
			</div>
		</Provider>
	);
}

export default Workouts;
