import React, { Component } from 'react';
import firebase from 'firebase';
import base, { firebaseApp, authProvider } from './base';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllWorkouts from './components/AllWorkouts';
import AddWorkout from './components/AddWorkout';
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

	render() {
		const {
			auth,
			user: { workouts, loading }
		} = this.state;
		if (!auth) {
			return (
				<>
					<Header />
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
							render={props => <AllWorkouts {...props} workouts={workouts} />}
						/>
						<Route path="/add" component={AddWorkout} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;

export const exercises = [
	'Atlas Stones',
	'Axle Deadlift',
	'Barbell Deadlift',
	'Barbell Full Squat',
	'Barbell Glute Bridge',
	'Barbell Hip Thrust',
	'Barbell Walking Lunge',
	'Barbell Row',
	'Bottoms Up',
	'Box Squat',
	'Chin-Up',
	'Clean Deadlift',
	'Clean and Jerk',
	'Clean and Press',
	'Clean from Blocks',
	'Close-Grip Barbell Bench Press',
	'Cross-Body Crunch',
	'Decline EZ Bar Triceps Extension',
	'Decline Reverse Crunch',
	'Deficit Deadlift',
	'Dips - Triceps Version',
	'Dumbbell Bench Press',
	'Dumbbell Floor Press',
	'Dumbbell Flyes',
	'Dumbbell V-Sit Cross Jab',
	'EZ-Bar Curl',
	'Elbow to Knee',
	"Farmer's Walk",
	'Finger Curls',
	'Floor Glute-Ham Raise',
	'Front Squats With Two Kettlebells',
	'Hammer Curls',
	'Hang Clean',
	'Hip Circles (prone)',
	'Hyperextensions (Back Extensions)',
	'Incline Dumbbell Press',
	'Incline Hammer Curls',
	"Landmine 180's",
	'Leverage Shrug',
	'Lying Face Down Plate Neck Resistance',
	'Olympic Squat',
	'One-Arm High-Pulley Cable Side Bends',
	'One-Arm Kettlebell Push Press',
	'One-Arm Medicine Ball Slam',
	'One-Arm Side Laterals',
	'Palms-Down Wrist Curl Over A Bench',
	'Palms-Up Barbell Wrist Curl Over A Bench',
	'Plank',
	'Power Clean from Blocks',
	'Power Partials',
	'Power Snatch',
	'Pullups',
	'Push Press',
	'Pushups',
	'Reverse Band Box Squat',
	'Reverse Flyes',
	'Reverse Grip Bent-Over Rows',
	'Rickshaw Carry',
	'Romanian Deadlift With Dumbbells',
	'Romanian Deadlift from Deficit',
	'Rope Jumping',
	'Seated Barbell Military Press',
	'Seated Dumbbell Press',
	'Seated Two-Arm Palms-Up Low-Pulley Wrist Curl',
	'Side Laterals to Front Raise',
	'Single Leg Push-off',
	'Single-Arm Linear Jammer',
	'Single-Leg Press',
	'Smith Machine Calf Raise',
	'Smith Machine Shrug',
	'Snatch',
	'Spell Caster',
	'Spider Crawl',
	'Spider Curl',
	'Standing Cable Lift',
	'Standing Dumbbell Straight-Arm Front Delt Raise Above Head',
	'Standing Military Press',
	'Standing Palm-In One-Arm Dumbbell Press',
	'Standing Palms-In Dumbbell Press',
	'Standing Palms-Up Barbell Behind The Back Wrist Curl',
	'Sumo Deadlift',
	'Suspended Fallout',
	'T-Bar Row with Handle',
	'Tire Flip',
	'Triceps Pushdown - V-Bar Attachment',
	'Weighted Bench Dip',
	'Weighted Pull Ups',
	'Wide-Grip Standing Barbell Curl',
	'Wrist Roller',
	'Wrist Rotations with Straight Bar',
	'Zottman Curl'
];
