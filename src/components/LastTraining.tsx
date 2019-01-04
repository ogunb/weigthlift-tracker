import React, { Component } from 'react';
import { dateToDisplay } from '../utils';

export class LastTraining extends Component {
	render() {
		return (
			<>
				<h1 className="text-center mt-3">son antrenman</h1>
				<div className="row card">
					<div className="card-body">
						<h3 className="card-title text-center">{dateToDisplay(Date())}</h3>
						<table className="table table">
							<thead>
								<tr>
									<th>Antrenman</th>
									<th>Ağırlık</th>
									<th>Tekrar</th>
									<th>Set</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Squat</td>
									<td>80kg</td>
									<td>10</td>
									<td>3</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</>
		);
	}
}

export default LastTraining;
