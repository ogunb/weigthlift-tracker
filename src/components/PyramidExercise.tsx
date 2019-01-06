import React from 'react';

type Props = {
	exercise: string;
	weightAndRep: [number, number];
	index: number;
};

const PyramidExercise = (props: Props) => {
	const { exercise, weightAndRep, index } = props;
	return (
		<tr>
			<td className="text-capitalize">{exercise}</td>
			<td>{weightAndRep[0]}kg</td>
			<td>{weightAndRep[1]}</td>
			<td>Piramit {index + 1}</td>
		</tr>
	);
};

export default PyramidExercise;
