import React from 'react';
import { ReactComponent as Remove } from '../../assets/remove.svg';
type Props = {
	exercise: string;
	currExercise: exercise;
	onRemove: (exercise: string) => void;
};
function Exercise(props: Props) {
	const { exercise, currExercise, onRemove } = props;
	function onClick() {
		onRemove(exercise);
	}
	return (
		<tr key={exercise}>
			<td className="text-capitalize font-weight-bold">{exercise}</td>
			<td>{currExercise.sets[0][0]}kg</td>
			<td>{currExercise.sets[0][1]}</td>
			<td>{currExercise.sets.length}</td>
			<td>
				<Remove className="remove" onClick={onClick} />
			</td>
		</tr>
	);
}

export default Exercise;
