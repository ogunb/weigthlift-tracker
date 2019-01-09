import React from 'react';
import { ReactComponent as Remove } from '../assets/remove.svg';

type Props = {
	exercise: string;
	weightAndRep: number[];
	index: number;
	onRemove: () => void;
};

const PyramidExercise = (props: Props) => {
	const { exercise, weightAndRep, index, onRemove } = props;
	return (
		<tr>
			<td className="text-capitalize font-weight-bold">{exercise}</td>
			<td>{weightAndRep[0]}kg</td>
			<td>{weightAndRep[1]}</td>
			<td>Piramit {index + 1}</td>
			<td>
				<Remove className="remove" onClick={onRemove} />
			</td>
		</tr>
	);
};

export default PyramidExercise;
