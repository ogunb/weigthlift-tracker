import React, { Component } from 'react';
import firebase from 'firebase';
import base, { firebaseApp, authProvider } from './base';
import { ReactComponent as Loading } from './assets/loading.svg';
import Login from './components/Login';
import { dateToDisplay } from './utils';
import Header from './components/Header';

const initialStore = {
	user: {
		workouts: {},
		bestWorkout: {}
	}
};
const Context = React.createContext(initialStore);

const reducer = (state: AppState, action: Action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export class Provider extends Component {
	state: AppState = {
		user: {
			workouts: {
				loading: {}
			},
			bestWorkout: {}
		},
		dispatch: action => {
			this.setState((state: AppState) => reducer(state, action));
		},
		auth: false,
		exercises: [
			'Rickshaw Carry',
			'Single-Leg Press',
			'Atlas Stones',
			'Incline Hammer Curls',
			'Wrist Rotations with Straight Bar',
			'Single-Arm Linear Jammer',
			'Side Laterals to Front Raise',
			'T-Bar Row with Handle',
			'One-Arm Medicine Ball Slam',
			'Palms-Down Wrist Curl Over A Bench',
			'Clean from Blocks',
			'Weighted Pull Ups',
			"Landmine 180's",
			'Dips - Triceps Version',
			'Barbell Full Squat',
			'Standing Palm-In One-Arm Dumbbell Press',
			'Palms-Up Barbell Wrist Curl Over A Bench',
			"Farmer's Walk",
			'Romanian Deadlift With Dumbbells',
			'Barbell Glute Bridge',
			'Clean Deadlift',
			'Deficit Deadlift',
			'Tire Flip',
			'Clean and Press',
			'Barbell Deadlift',
			'Standing Palms-Up Barbell Behind The Back Wrist Curl',
			'Lying Face Down Plate Neck Resistance',
			'Decline EZ Bar Triceps Extension',
			'Push Press',
			'Snatch',
			'Clean and Jerk',
			'Hang Clean',
			'Finger Curls',
			'Suspended Fallout',
			'Wide-Grip Standing Barbell Curl',
			'Standing Palms-In Dumbbell Press',
			'Standing Military Press',
			'One-Arm Kettlebell Push Press',
			'Box Squat',
			'Dumbbell Floor Press',
			'Sumo Deadlift',
			'Reverse Band Box Squat',
			'Plank',
			'Standing Cable Lift',
			'Bottoms Up',
			'Spell Caster',
			'Dumbbell V-Sit Cross Jab',
			'Dumbbell Bench Press',
			'Pullups',
			'Pushups',
			'Reverse Grip Bent-Over Rows',
			'Smith Machine Shrug',
			'Spider Curl',
			'Decline Reverse Crunch',
			'Front Squats With Two Kettlebells',
			'Power Snatch',
			'Romanian Deadlift from Deficit',
			'Single Leg Push-off',
			'Hip Circles (prone)',
			'Smith Machine Calf Raise',
			'Seated Two-Arm Palms-Up Low-Pulley Wrist Curl',
			'Seated Barbell Military Press',
			'Rope Jumping',
			'Power Clean from Blocks',
			'Spider Crawl',
			'Barbell Walking Lunge',
			'Dumbbell Flyes',
			'Close-Grip Barbell Bench Press',
			'Cross-Body Crunch',
			'Chin-Up',
			'Wrist Roller',
			'Triceps Pushdown - V-Bar Attachment',
			'One-Arm Side Laterals',
			'EZ-Bar Curl',
			'Power Partials',
			'Barbell Hip Thrust',
			'Olympic Squat',
			'Axle Deadlift',
			'Leverage Shrug',
			'One-Arm High-Pulley Cable Side Bends',
			'Floor Glute-Ham Raise',
			'Elbow to Knee',
			'Hyperextensions (Back Extensions)',
			'Hammer Curls',
			'Zottman Curl',
			'Weighted Bench Dip',
			'Seated Dumbbell Press',
			'Standing Dumbbell Straight-Arm Front Delt Raise Above Head',
			'Reverse Flyes',
			'Incline Dumbbell Press'
		]
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
							workouts: {
								'2019-01-01': { Örnek: { sets: [[80, 10]], isPyramid: false } }
							}
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
