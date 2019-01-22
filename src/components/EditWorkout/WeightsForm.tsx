import React, { Component } from 'react';

class WeightsForm extends Component {
	render() {
		return (
			<div className="input-group mt-3">
				<div className="input-group-append">
					<span className="input-group-text">Weight</span>
				</div>
				<input
					type="number"
					className="form-control form-control-lg"
					placeholder="...kg"
					required
				/>
			</div>
		);
	}
}

export default WeightsForm;
