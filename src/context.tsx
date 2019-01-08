import React, { Component } from 'react';
import firebase from 'firebase';
import base, { firebaseApp, authProvider } from './base';
import { ReactComponent as Loading } from './assets/loading.svg';
import Login from './components/Login';
import { dateToDisplay } from './utils';
import Header from './components/Header';

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
const initialStore: AppState = {
	user: {
		workouts: {
			loading: {}
		},
		bestWorkout: {}
	},
	auth: false
};
const Context = React.createContext(initialStore);

const reducer = (state: AppState, action: Action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export class Provider extends Component<any, AppState> {
	state = {
		user: {
			workouts: {
				loading: {}
			},
			bestWorkout: {}
		},
		dispatch: (action: Action) => {
			this.setState((state: AppState) => reducer(state, action));
		},
		auth: false
	};

	componentDidMount() {
		const localUid =
			localStorage.getItem('weightlifter') || 'OIiZTbT3n6TmL51BDLEksQkkl4u2';
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
		// const result = await firebase.auth().signInWithPopup(authProvider);
		// const { uid } = result.user!;
		// base.fetch(`${uid}`, {
		// 	context: this,
		// 	then(data) {
		// 		if (!data.workouts) {
		// 			base.post(`${uid}`, {
		// 				data: {
		// 					workouts: {
		// 						'2019-01-01': { Örnek: { sets: [[80, 10]], isPyramid: false } }
		// 					}
		// 				}
		// 			});
		// 		}
		// 		base.syncState(`${uid}`, {
		// 			context: this,
		// 			state: 'user'
		// 		});
		// 		localStorage.setItem('weightlifter', `${uid}`);
		// 	}
		// });
		// this.setState({
		// 	auth: uid
		// });
	};

	render() {
		const { auth, user } = this.state;
		if (!auth) {
			return (
				<>
					<Header />
					<Login handleClick={this.handleClick} />
				</>
			);
		}
		if (
			auth &&
			Object.prototype.hasOwnProperty.call(user.workouts, 'loading')
		) {
			return <Loading className="loading" />;
		}
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export const Consumer = Context.Consumer;
