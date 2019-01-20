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
			auth: false,
			filtered: []
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

	handleEditWorkout = (
		obj: WorkoutsType,
		workoutName: string,
		newWorkoutName: string,
		date: string
	): void => {
		if (workoutName === newWorkoutName) {
			this.onNewWorkout(obj);
		} else {
			this.removeExercise(workoutName, date);
			this.onNewWorkout(obj);
		}
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
									handleEditWorkout={this.handleEditWorkout}
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
