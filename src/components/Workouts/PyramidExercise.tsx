import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Remove } from '../../assets/remove.svg';
import { ReactComponent as Edit } from '../../assets/pen-solid.svg';

type Props = {
	exercise: string;
	weightAndRep: number[];
	index: number;
	onRemove: (exercise: string) => void;
	workoutDay: string;
};

const PyramidExercise = (props: Props) => {
	const { exercise, weightAndRep, index, onRemove, workoutDay } = props;
	function onClick() {
		onRemove(exercise);
	}
	return (
		<tr>
			<td className="text-capitalize font-weight-bold">{exercise}</td>
			<td>{weightAndRep[0]}kg</td>
			<td>{weightAndRep[1]}</td>
			<td>Piramit {index + 1}</td>
			<td className="d-sm-flex flex-row ">
				<Link to={`/edit/${workoutDay}/${exercise}`} className="remove-wrapper">
					<Edit className="remove" />
				</Link>
				<Remove className="remove" onClick={onClick} />
			</td>
		</tr>
	);
};

export default PyramidExercise;
