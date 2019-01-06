import React, { Component } from 'react';
import { Consumer } from '../context';
import TrainingList from './TrainingList';

function Trainings() {
	return (
		<Consumer>
			{value => {
				const { trainings }: { trainings: TrainingsType } = value.user;
				return (
					<div className="container">
						<h2 className="mb-3 mt-4 text-center">Tüm Antrenmanlar</h2>
						<TrainingList />
					</div>
				);
			}}
		</Consumer>
	);
}

export default Trainings;
