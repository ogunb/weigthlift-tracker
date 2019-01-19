import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import base, { firebaseApp, authProvider } from './base';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllWorkouts from './components/Workouts/AllWorkouts';
import AddWorkout from './components/AddWorkout/AddWorkout';
import EditWorkout from './components/EditWorkout/EditWorkout';
import { ReactComponent as Loading } from './assets/loading.svg';
import Login from './components/Login';
import Header from './components/Header';

class App extends Component<{}, AppState> {
	state = {
		user: {
			workouts: {},
			bestWorkout: {},
			loading: true
		},
		auth: false
	};

	componentDidMount() {
		const localUid = localStorage.getItem('weightlifter');
		if (localUid) {
			this.setState({
				auth: localUid
			});
			base.syncState(`${localUid}`, {
				context: this,
				state: 'user'
			});
		}
	}

	handleClick = async () => {
		const result = await firebase.auth().signInWithPopup(authProvider);
		const { uid } = result.user!;
		base.fetch(`${uid}`, {
			context: this,
			then(data) {
				if (!data.workouts) {
					base.post(`${uid}`, {
						data: {
							loading: false
						}
					});
				}
				base.syncState(`${uid}`, {
					context: this,
					state: 'user'
				});
				localStorage.setItem('weightlifter', `${uid}`);
			}
		});
		this.setState({
			auth: uid
		});
	};

	onNewWorkout = (newWorkout: WorkoutsType) => {
		this.setState(prevState => ({
			...prevState,
			user: {
				...prevState.user,
				workouts: {
					...prevState.user.workouts,
					...newWorkout
				}
			}
		}));
	};

	onSignOut = () => {
		const initialStore = {
			user: {
				workouts: {},
				bestWorkout: {},
				loading: false
			},
			auth: false
		};
		this.setState({
			...initialStore
		});
	};

	removeExercise = (exercise: string, date: string) => {
		const newWorkouts: WorkoutsType = { ...this.state.user.workouts };
		const { auth } = this.state;
		delete newWorkouts[date][exercise];
		base.remove(`${auth}/workouts/${date}/${exercise}`);
		if (!Object.keys(newWorkouts[date]).length) {
			delete newWorkouts[date];
			base.remove(`${auth}/workouts/${date}`);
		}
		this.setState(prevState => ({
			...prevState,
			user: {
				...prevState.user,
				workouts: {
					...newWorkouts
				}
			}
		}));
	};

	render() {
		const {
			auth,
			user: { workouts, loading }
		} = this.state;
		if (!auth) {
			return (
				<>
					<h1 className="display-4 text-center">TRACKER</h1>
					<Login handleClick={this.handleClick} />
				</>
			);
		}
		if (auth && loading) {
			return <Loading className="loading" />;
		}
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route
							exact
							path="/"
							render={props => (
								<AllWorkouts
									{...props}
									workouts={workouts}
									signOut={this.onSignOut}
									removeExercise={this.removeExercise}
								/>
							)}
						/>
						<Route
							path="/add"
							render={props => (
								<AddWorkout {...props} onNewWorkout={this.onNewWorkout} />
							)}
						/>
						<Route
							path="/edit/:day/:workout"
							render={props => (
								<EditWorkout
									{...props}
									onNewWorkout={this.onNewWorkout}
									workouts={workouts}
								/>
							)}
						/>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;

export const exercises = [
	'Arnold Press',
	'Dumbbell Front Squats',
	'Barbell Front Squats',
	'Barbell Lunges',
	'Dumbbell Lunges',
	'Dumbbell Preacher Curls',
	'Barbell Preacher Curls',
	'Barbell Romanian Deadlifts',
	'Dumbbell Romanian Deadlifts',
	'Dumbbell Split Squats',
	'Barbell Split Squats',
	'Barbell Squats',
	'Dumbbell Squats',
	'Dumbbell Step-Ups',
	'Barbell Step-Ups',
	'Barbell Straight Leg Deadlifts',
	'Dumbbell Straight Leg Deadlifts',
	'Dumbbell Sumo Deadlifts',
	'Barbell Sumo Deadlifts',
	'Barbell Shrugs',
	'Machine Shrugs',
	'Dumbbell Shrugs',
	'Machine Upright Rows',
	'Barbell Upright Rows',
	'Dumbbell Upright Rows',
	'Barbell Rear Delt Flyes',
	'Barbell Rear Delt Raises',
	'Barbell Rear Delt Rows',
	'Machine Rear Delt Flyes',
	'Machine Rear Delt Raises',
	'Machine Rear Delt Rows',
	'Dumbbell Rear Delt Flyes',
	'Dumbbell Rear Delt Raises',
	'Dumbbell Rear Delt Rows',
	'Bench Dips',
	'Bent Over Barbell Rows',
	'Bent Over Dumbbell Rows',
	'Biceps Curl Machine',
	'Cable Crossovers/Cable Flyes',
	'Cable Curls',
	'Cable Press-Downs',
	'Cable Pull-Throughs',
	'Chest Supported Dumbbell Rows',
	'Chest Supported Barbell Rows',
	'Chest Supported Machine Rows',
	'Chin-Ups',
	'Close Grip Push-Ups',
	'Concentration Curls',
	'Decline Barbell Bench Press',
	'Decline Dumbbell Bench Press',
	'Decline Chest Press Machine',
	'Decline Close Grip Bench Press',
	'Decline Dumbbell Flyes',
	'Dips',
	'Dumbbell Front Raises',
	'Machine Front Raises',
	'Cable Front Raises',
	'Dumbbell Lateral Raises',
	'Cable Lateral Raises',
	'Machine Lateral Raises',
	'Flat Dumbbell Bench Press',
	'Flat Barbell Bench Press',
	'Flat Chest Press Machine',
	'Flat Close Grip Bench Press',
	'Flat Dumbbell Flyes',
	'Glute-Ham Raises',
	'Good-Mornings',
	'Hammer Curls',
	'Hyperextensions',
	'Incline Dumbbell Bench Press',
	'Incline Barbell Bench Press',
	'Incline Chest Press Machine',
	'Incline Dumbbell Curls',
	'Incline Dumbbell Flyes',
	'Inverted Rows',
	'Lat Pull-Downs (Chest)',
	'Lat Pull-Downs (Back)',
	'Laying Dumbbell Triceps Extensions',
	'Laying Barbell Triceps Extensions',
	'Leg Curls',
	'Leg Extensions',
	'Leg Press',
	'Machine Squat/Hack Squat',
	'Overhead Dumbbell Triceps Extensions',
	'Overhead Barbell Triceps Extensions',
	'Overhead Machine Press',
	'Pec Deck Machine',
	'Pull-Ups',
	'Push-Ups',
	'Seated Cable Rows',
	'Seated Dumbbell Curls',
	'Seated Overhead Barbell Press',
	'Seated Overhead Dumbbell Press',
	'Single Leg Press',
	'Skull Crushers',
	'Standing Dumbbell Curls',
	'Standing Barbell Curls',
	'Standing Overhead Dumbbell Press',
	'Standing Overhead Barbell Press',
	'T-Bar Rows'
];
