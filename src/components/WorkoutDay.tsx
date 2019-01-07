import React from 'react';
import { dateToDisplay } from '../utils';
import Workout from './Workout';

type Props = {
	workout: WorkoutTypes;
	workoutDay: string;
};

const WorkoutDay = (props: Props) => {
	const { workout, workoutDay } = props;
	return (
		<div className="workoutDayWrapper">
			<div className="card">
				<div className="card-body table-responsive-sm">
					<h4 className="text-center">{dateToDisplay(workoutDay)}</h4>
					<Workout workout={workout} />
				</div>
			</div>
		</div>
	);
};

export default WorkoutDay;
