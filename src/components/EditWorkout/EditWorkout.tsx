import React, { Component } from 'react';
import Nav from '../Nav';
import Header from '../Header';
import WorkoutForm from './WorkoutForm';

type EditWorkoutState = {
	isPyramid: boolean | null;
};

export class EditWorkout extends Component<any, EditWorkoutState> {
	state = {
		isPyramid: null
	};

	componentDidMount() {
		const { day, workout } = this.props.match.params;
		const { isPyramid } = this.props.workouts[day][workout];
		this.setState({
			isPyramid
		});
	}

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

	handleNewWorkout = (obj: WorkoutsType, exercise: string) => {
		const { handleEditWorkout, history } = this.props;
		const { day, workout: workoutName } = this.props.match.params;
		handleEditWorkout(obj, workoutName, exercise, day);
		history.push('/');
	};

	render() {
		const { isPyramid } = this.state;
		const { day, workout: workoutName } = this.props.match.params;
		const exercise = this.props.workouts[day][workoutName];
		if (isPyramid === false) {
			return (
				<>
					<Header />
					<div className="container">
						<h3 className="text-center">Yeni Egzersiz</h3>
						<WorkoutForm
							isPyramid={isPyramid}
							onNewWorkout={this.handleNewWorkout}
							day={day}
							workoutName={workoutName}
							workout={exercise}
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
						<h3 className="text-center">Yeni Egzersiz</h3>
						<WorkoutForm
							isPyramid={isPyramid}
							onNewWorkout={this.handleNewWorkout}
							day={day}
							workoutName={workoutName}
							workout={exercise}
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
					<h3 className="text-center">Yeni Egzersiz</h3>
					<div className="container d-flex flex-column ">
						<button
							className="btn btn-block btn-lg mt-3 btn-primary"
							onClick={this.changePyramid}
							data-pyramid={false}
						>
							Egzersiz Ekle
						</button>
						<button
							className="btn btn-block btn-lg mt-3 btn-outline-danger"
							onClick={this.changePyramid}
							data-pyramid={true}
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

export default EditWorkout;
