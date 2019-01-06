import React from 'react';
import { Consumer } from '../context';
import TrainingDay from './TrainingDay';

const TrainingList = () => {
	return (
		<Consumer>
			{value => {
				const { trainings }: { trainings: TrainingsType } = value.user;
				return Object.keys(trainings)
					.sort()
					.reverse()
					.map(trainingDay => {
						return (
							<TrainingDay
								key={trainingDay}
								trainingDay={trainingDay}
								training={trainings[trainingDay]}
							/>
						);
					});
			}}
		</Consumer>
	);
};

export default TrainingList;
