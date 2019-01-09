import React, { Component } from 'react';
import WorkoutDay from './WorkoutDay';
import Nav from './Nav';
import Header from './Header';

function AllWorkouts(props: any) {
	const { workouts }: { workouts: WorkoutsType } = props;
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
								/>
							);
						})}
				</div>
				<Nav />
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
