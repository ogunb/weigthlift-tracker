import React, { Component } from 'react';
import { dateToDisplay } from '../utils';
import PyramidExercise from './PyramidExercise';

type LastTrainingProps = {
	lastTrainDay: string;
	training: TrainingTypes;
};

export class LastTraining extends Component<LastTrainingProps> {
	render() {
		const { lastTrainDay, training } = this.props;
		return (
			<>
				<h1 className="text-center mt-3">son antrenman</h1>
				<div className="row card">
					<div className="card-body">
						<h3 className="card-title text-center">
							{dateToDisplay(lastTrainDay)}
						</h3>
						<table className="table table-sm">
							<thead>
								<tr>
									<th>Antrenman</th>
									<th>Ağırlık</th>
									<th>Tekrar</th>
									<th>Set</th>
								</tr>
							</thead>
							<tbody>
								{Object.keys(training).map(exercise => {
									const currExercise = training[exercise];
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
											<td className="text-capitalize">{exercise}</td>
											<td>{currExercise.sets[0][0]}kg</td>
											<td>{currExercise.sets[0][1]}</td>
											<td>{currExercise.sets.length}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</>
		);
	}
}

export default LastTraining;
