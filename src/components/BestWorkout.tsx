import React, { Component } from 'react';
import { dateToDisplay } from '../utils';
import Workout from './Workout';

type BestWorkoutProps = {
	workout: WorkoutTypes;
};

export class BestWorkout extends Component<BestWorkoutProps> {
	render() {
		const { workout } = this.props;
		return (
			<>
				<div className="row card">
					<div className="card-body table-responsive-sm">
						<h1 className="text-center mt-3">En İyi Antrenman</h1>
						<Workout workout={workout} />
					</div>
				</div>
			</>
		);
	}
}

export default BestWorkout;
