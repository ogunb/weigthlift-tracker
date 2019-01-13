import React, { Component } from 'react';

class WeightsForm extends Component {
	render() {
		return (
			<div className="input-group mt-3">
				<div className="input-group-append">
					<span className="input-group-text">Ağırlık</span>
				</div>
				<input
					type="number"
					className="form-control form-control-lg"
					required
				/>
			</div>
		);
	}
}

export default WeightsForm;
