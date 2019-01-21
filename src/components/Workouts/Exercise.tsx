import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Remove } from '../../assets/remove.svg';
import { ReactComponent as Edit } from '../../assets/pen-solid.svg';

type Props = {
	exercise: string;
	currExercise: exercise;
	onRemove: (exercise: string) => void;
	workoutDay: string;
};

function Exercise(props: Props) {
	const { exercise, currExercise, onRemove, workoutDay } = props;

	function onClick() {
		onRemove(exercise);
	}

	return (
		<tr key={exercise}>
			<td className="text-capitalize font-weight-bold">{exercise}</td>
			<td>{currExercise.sets[0][0]}kg</td>
			<td>{currExercise.sets[0][1]}</td>
			<td>{currExercise.sets.length}</td>
			<td className="d-sm-flex flex-row ">
				<Link to={`/edit/${workoutDay}/${exercise}`} className="remove-wrapper">
					<Edit className="remove" />
				</Link>
				<Remove className="remove" onClick={onClick} />
			</td>
		</tr>
	);
}

export default Exercise;
