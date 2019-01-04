import React, { Component } from 'react';
import LastTraining from './LastTraining';
import Training from './Training';

class AddTraining extends Component {
	render() {
		return (
			<div className="container">
				<LastTraining />
				<Training />
			</div>
		);
	}
}

export default AddTraining;
