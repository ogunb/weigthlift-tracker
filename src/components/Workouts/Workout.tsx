import React from 'react';
import Exercise from './Exercise';
import PyramidExercise from './PyramidExercise';

type Props = {
	workout: WorkoutTypes;
	removeExercise: removeExercise;
	workoutDay: string;
	filteredWorkouts: string[];
};

function Workout(props: Props) {
	const { workout, removeExercise, workoutDay, filteredWorkouts } = props;
	function onRemove(exercise: string) {
		removeExercise(exercise, workoutDay);
	}
	return (
		<div>
			<table className="table table-sm table-striped table-bordered mt-4">
				<thead>
					<tr>
						<td>Egzersiz</td>
						<th>Ağırlık</th>
						<th>Tekrar</th>
						<th>Set</th>
						<th>-</th>
					</tr>
				</thead>
				<tbody>
					{Object.keys(workout).map(exercise => {
						if (filteredWorkouts.includes(exercise)) {
							const currExercise = workout[exercise];
							if (currExercise.isPyramid) {
								return currExercise.sets.map(
									(weightAndRep: number[], index: number) => (
										<PyramidExercise
											exercise={exercise}
											weightAndRep={weightAndRep}
											index={index}
											key={`${exercise}${index}`}
											onRemove={onRemove}
											workoutDay={workoutDay}
										/>
									)
								);
							}
							return (
								<Exercise
									key={exercise}
									exercise={exercise}
									currExercise={workout[exercise]}
									onRemove={onRemove}
									workoutDay={workoutDay}
								/>
							);
						}
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Workout;
