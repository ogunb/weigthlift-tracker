import React, { Component } from 'react';
import { dateToDisplay } from '../utils';
import Training from './Training';

type BestTrainingProps = {
	training: TrainingTypes;
};

export class BestTraining extends Component<BestTrainingProps> {
	render() {
		const { training } = this.props;
		return (
			<>
				<div className="row card">
					<div className="card-body table-responsive-sm">
						<h1 className="text-center mt-3">En İyi Antrenman</h1>
						<Training training={training} />
					</div>
				</div>
			</>
		);
	}
}

export default BestTraining;
