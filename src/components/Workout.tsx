import React from 'react';
import PyramidExercise from './PyramidExercise';

type Props = {
	workout: WorkoutTypes;
};

function Workout(props: Props) {
	const { workout } = props;
	return (
		<div>
			<table className="table table-sm table-striped table-bordered mt-4">
				<thead>
					<tr>
						<td>Egzersiz</td>
						<th>Ağırlık</th>
						<th>Tekrar</th>
						<th>Set</th>
					</tr>
				</thead>
				<tbody>
					{Object.keys(workout).map(exercise => {
						const currExercise = workout[exercise];
						if (currExercise.isPyramid) {
							return currExercise.sets.map(
								(weightAndRep: [number, number], index: number) => (
									<PyramidExercise
										exercise={exercise}
										weightAndRep={weightAndRep}
										index={index}
										key={`${exercise}${index}`}
									/>
								)
							);
						}
						return (
							<tr key={exercise}>
								<td className="text-capitalize font-weight-bold">{exercise}</td>
								<td>{currExercise.sets[0][0]}kg</td>
								<td>{currExercise.sets[0][1]}</td>
								<td>{currExercise.sets.length}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Workout;
