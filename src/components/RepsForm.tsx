import React, { Component } from 'react';

class RepsForm extends Component {
	render() {
		return (
			<div className="input-group mt-3">
				<div className="input-group-append">
					<span className="input-group-text">Tekrar</span>
				</div>
				<input
					type="number"
					className="form-control form-control-lg"
					defaultValue="3"
					// required
				/>
			</div>
		);
	}
}

export default RepsForm;
