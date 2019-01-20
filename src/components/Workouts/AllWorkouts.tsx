import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import WorkoutDay from './WorkoutDay';
import Nav from '../Nav';
import Header from '../Header';
import { exercises } from '../../exercises';

type Props = {
	workouts: WorkoutsType;
	history: any;
	signOut: () => void;
	removeExercise: removeExercise;
};
export class AllWorkouts extends Component<Props, { filtered: string }> {
	state = {
		filtered: ''
	};

	filterExercise = (e: React.ChangeEvent<HTMLInputElement>) => {
		const filtered = e.target.value.trim().toLowerCase();
		this.setState({
			filtered
		});
	};

	handleSignOut = () => {
		const { signOut, history } = this.props;
		localStorage.removeItem('weightlifter');
		firebase
			.auth()
			.signOut()
			.then(() => history.push('/'));
		signOut();
	};

	render = () => {
		const { workouts, removeExercise }: Props = this.props;
		if (workouts) {
			return (
				<div className="container-fluid">
					<div className="container">
						<Header />
						<h2 className="mb-3 mt-4 text-center">Tüm Antrenmanlar</h2>
						<div className="input-group mt-3 mb-3">
							<div className="input-group-append">
								<span className="input-group-text">Filtrele</span>
							</div>
							<input
								type="text"
								className="form-control form-control-lg"
								onChange={this.filterExercise}
							/>
						</div>
						{Object.keys(workouts)
							.sort()
							.reverse()
							.map(workoutDay => {
								return (
									<WorkoutDay
										key={workoutDay}
										workoutDay={workoutDay}
										workout={workouts[workoutDay]}
										removeExercise={removeExercise}
										filter={this.state.filtered}
									/>
								);
							})}
					</div>
					<Nav signOut={this.handleSignOut} />
				</div>
			);
		}
		return (
			<>
				<Header />
				<h2 className="text-center mt-5">
					Antrenman eklemek için aşağıdaki + butonunu kullanın.
				</h2>
				<Nav />
			</>
		);
	};
}

export default AllWorkouts;
