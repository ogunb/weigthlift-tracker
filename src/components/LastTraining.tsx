import React, { Component } from 'react';

export class LastTraining extends Component {
	render() {
		return (
			<>
				<h2 className="text-center mt-3">son antrenman</h2>
				<div className="row card">
					<div className="card-body">
						<h4 className="card-title text-center">17 aralık '18</h4>
						<table className="table table">
							<thead>
								<tr>
									<th scope="col">Antrenman</th>
									<th scope="col">Ağırlık</th>
									<th scope="col">Tekrar</th>
									<th scope="col">Set</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Squat</td>
									<td>80kg</td>
									<td>10</td>
									<td>3</td>
								</tr>
								<tr>
									<td>Deadlift</td>
									<td>90kg</td>
									<td>8</td>
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
