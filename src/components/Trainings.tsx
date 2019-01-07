import React, { Component } from 'react';
import { Provider } from '../context';
import TrainingList from './TrainingList';
import Nav from './Nav';

function Trainings() {
	return (
		<Provider>
			<div className="App container-fluid">
				<h1 className="display-4 text-center">T R A C K E R</h1>
				<div className="container">
					<h2 className="mb-3 mt-4 text-center">Tüm Antrenmanlar</h2>
					<TrainingList />
				</div>
				<Nav />
			</div>
		</Provider>
	);
}

export default Trainings;
