import React from 'react';
import { dateToDisplay } from '../utils';
import Training from './Training';

type Props = {
	training: TrainingTypes;
	trainingDay: string;
};

const TrainingDay = (props: Props) => {
	const { training, trainingDay } = props;
	return (
		<div className="trainingDayWrapper">
			<div className="card">
				<div className="card-body table-responsive-sm">
					<h4 className="text-center">{dateToDisplay(trainingDay)}</h4>
					<Training training={training} />
				</div>
			</div>
		</div>
	);
};

export default TrainingDay;
