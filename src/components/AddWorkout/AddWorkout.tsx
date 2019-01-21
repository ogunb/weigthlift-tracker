import React, { Component } from 'react';
import Nav from '../Nav';
import Header from '../Header';
import WorkoutForm from './WorkoutForm';

type AddWorkoutState = {
	isPyramid: boolean | null;
};

export class AddWorkout extends Component<any, AddWorkoutState> {
	state = {
		isPyramid: null
	};

	changePyramid = (e: any) => {
		if (e.target.dataset.pyramid === 'true') {
			this.setState({
				isPyramid: true
			});
		} else {
			this.setState({
				isPyramid: false
			});
		}
	};

	handleNewWorkout = (obj: WorkoutsType) => {
		this.props.onNewWorkout(obj);
		this.props.history.push('/');
	};

	render() {
		const { isPyramid } = this.state;
		if (isPyramid === false) {
			return (
				<>
					<Header />
					<div className="container">
						<h3 className="text-center">New Exercise</h3>
						<WorkoutForm
							isPyramid={isPyramid}
							onNewWorkout={this.handleNewWorkout}
						/>
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
						<h3 className="text-center">New Exercise</h3>
						<WorkoutForm
							isPyramid={isPyramid}
							onNewWorkout={this.handleNewWorkout}
						/>
					</div>
					<Nav />
				</>
			);
		}
		return (
			<>
				<Header />
				<div className="container">
					<h3 className="text-center">New Exercise</h3>
					<div className="container d-flex flex-column ">
						<button
							className="btn btn-block btn-lg mt-3 btn-primary"
							onClick={this.changePyramid}
							data-pyramid={false}
						>
							Add New Exercise
						</button>
						<button
							className="btn btn-block btn-lg mt-3 btn-outline-danger"
							onClick={this.changePyramid}
							data-pyramid={true}
						>
							Add New Exercise (Pyramid)
						</button>
					</div>
				</div>
				<Nav />
			</>
		);
	}
}

export default AddWorkout;
