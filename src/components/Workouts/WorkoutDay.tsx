import React from 'react';
import { dateToDisplay } from '../../utils';
import Workout from './Workout';

type Props = {
	workout: WorkoutTypes;
	workoutDay: string;
	removeExercise: removeExercise;
	filter: string;
};

const WorkoutDay = (props: Props) => {
	const { workout, workoutDay, removeExercise, filter: filterValue } = props;
	const filteredWorkouts = Object.keys(workout).filter(exercise =>
		exercise.toLowerCase().includes(filterValue)
	);
	let componentHasChildren = filteredWorkouts.length > 0 ? true : false;
	if (componentHasChildren) {
		return (
			<div className="workoutDayWrapper">
				<div className="card">
					<div className="card-body table-responsive-sm">
						<h4 className="text-center">{dateToDisplay(workoutDay)}</h4>
						<Workout
							workout={workout}
							workoutDay={workoutDay}
							removeExercise={removeExercise}
							filteredWorkouts={filteredWorkouts}
						/>
					</div>
				</div>
			</div>
		);
	}
	return null;
};

export default WorkoutDay;
