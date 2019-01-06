import React, { Component } from 'react';
import { dateToDisplay } from '../utils';

type LastTrainingProps = {
	lastTrainDay: number;
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
												<tr>
													<td className="text-capitalize">{exercise}</td>
													<td>{weightAndRep[0]}kg</td>
													<td>{weightAndRep[1]}</td>
													<td>Piramit {index + 1}</td>
												</tr>
											)
										);
									}
									return (
										<tr>
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
