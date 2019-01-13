import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import WorkoutDay from './WorkoutDay';
import Nav from '../Nav';
import Header from '../Header';

type Props = {
	workouts: WorkoutsType;
	history: any;
	signOut: () => void;
	removeExercise: removeExercise;
};
function AllWorkouts(props: any) {
	const { workouts, signOut, history, removeExercise }: Props = props;
	function handleSignOut() {
		localStorage.removeItem('weightlifter');
		firebase
			.auth()
			.signOut()
			.then(() => history.push('/'));
		signOut();
	}
	if (workouts) {
		return (
			<div className="container-fluid">
				<div className="container">
					<Header />
					<h2 className="mb-3 mt-4 text-center">Tüm Antrenmanlar</h2>
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
								/>
							);
						})}
				</div>
				<Nav signOut={handleSignOut} />
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
}

export default AllWorkouts;
