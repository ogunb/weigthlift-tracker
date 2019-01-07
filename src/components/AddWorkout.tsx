import React, { Component } from 'react';
import { Consumer } from '../context';
import Nav from './Nav';
import Header from './Header';

type AddWorkoutProps = {
	isPyramid: boolean | null;
};

export class AddWorkout extends Component<any, AddWorkoutProps> {
	state = {
		isPyramid: false
	};
	render() {
		return (
			<Consumer>
				{value => {
					const { isPyramid } = this.state;
					if (isPyramid === false) {
						return (
							<>
								<Header />
								<div className="container">
									<h3 className="text-center">Yeni Egzersiz</h3>
									<form>
										<input type="text" />
									</form>
								</div>
								<Nav />
							</>
						);
					} else if (isPyramid === true) {
						return (
							<>
								<Header />
								<div className="container">
									<h3 className="text-center">pyramid</h3>
									<form>
										<input type="text" />
									</form>
								</div>
								<Nav />
							</>
						);
					}
					return (
						<>
							<Header />
							<div className="container">
								<h3 className="text-center">Yeni Egzersiz</h3>
								<form>
									<input type="text" />
								</form>
							</div>
							<Nav />
						</>
					);
				}}
			</Consumer>
		);
	}
}

export default AddWorkout;
