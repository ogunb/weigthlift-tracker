import React, { Component } from 'react';
import { Consumer } from '../context';
import LastTraining from './LastTraining';
import Training from './Training';

class Trainings extends Component {
	render() {
		return (
			<Consumer>
				{value => {
					const {
						lastTrainDay,
						trainings
					}: { lastTrainDay: any; trainings: TrainingsType } = value.user;
					const lastTrainingObject: TrainingTypes = trainings[lastTrainDay];
					return (
						<div className="container">
							<LastTraining
								lastTrainDay={lastTrainDay}
								training={lastTrainingObject}
							/>
							<Training />
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default Trainings;
