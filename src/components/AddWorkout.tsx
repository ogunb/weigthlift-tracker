import React, { Component } from 'react';
import { Consumer } from '../context';
import Nav from './Nav';
import Header from './Header';
import WorkoutForm from './WorkoutForm';

type AddWorkoutState = {
	isPyramid: boolean | null;
};

export class AddWorkout extends Component<any, AddWorkoutState> {
	state = {
		isPyramid: null
	};

	changePyramid = (e: any) => {
		if (e.target.textContent.includes('piramit')) {
			this.setState({
				isPyramid: false
			});
		} else {
			this.setState({
				isPyramid: false
			});
		}
	};

	render() {
		const { isPyramid } = this.state;
		if (isPyramid === false) {
			return (
				<>
					<Header />
					<div className="container">
						<h3 className="text-center">Yeni Egzersiz</h3>
						<WorkoutForm isPyramid={isPyramid} />
					</div>
					<Nav />
				</>
			);
		}
		if (isPyramid === true) {
			return (
				<>
					<Header />
					<div className="container">
						<h3 className="text-center">pyramid</h3>
						<WorkoutForm isPyramid={isPyramid} />
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
					<div className="container d-flex flex-column ">
						<button
							className="btn btn-block btn-lg mt-3 btn-primary"
							onClick={this.changePyramid}
						>
							Egzersiz Ekle
						</button>
						<button
							className="btn btn-block btn-lg mt-3 btn-outline-danger"
							onClick={this.changePyramid}
						>
							Piramit Egzersiz Ekle
						</button>
					</div>
				</div>
				<Nav />
			</>
		);
	}
}

export default AddWorkout;
