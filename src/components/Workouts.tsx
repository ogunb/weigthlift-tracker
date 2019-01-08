import React, { Component } from 'react';
import WorkoutList from './WorkoutList';
import Nav from './Nav';
import Header from './Header';

function Workouts() {
	return (
		<div className="App container-fluid">
			<div className="container">
				<Header />
				<h2 className="mb-3 mt-4 text-center">Tüm Antrenmanlar</h2>
				<WorkoutList />
			</div>
			<Nav />
		</div>
	);
}

export default Workouts;
