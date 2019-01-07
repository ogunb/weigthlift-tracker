import React from 'react';
import { Consumer } from '../context';
import WorkoutDay from './WorkoutDay';

const WorkoutList = () => {
	return (
		<Consumer>
			{value => {
				const { workouts }: { workouts: WorkoutsType } = value.user;
				return Object.keys(workouts)
					.sort()
					.reverse()
					.map(workoutDay => {
						return (
							<WorkoutDay
								key={workoutDay}
								workoutDay={workoutDay}
								workout={workouts[workoutDay]}
							/>
						);
					});
			}}
		</Consumer>
	);
};

export default WorkoutList;
