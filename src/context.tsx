import React, { Component } from 'react';
import firebase from 'firebase';
import base, { firebaseApp, authProvider } from './base';
import { ReactComponent as Loading } from './assets/loading.svg';
import Login from './components/Login';
import { dateToDisplay } from './utils';

const initialStore = {
	user: {
		trainings: {},
		bestTraining: {}
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
			trainings: {
				loading: {}
			},
			bestTraining: {}
		},
		dispatch: action => {
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

	// handleClick = async () => {
	// 	const result = await firebase.auth().signInWithPopup(authProvider);
	// 	const { uid } = result.user!;
	// 	base.fetch(`${uid}`, {
	// 		context: this,
	// 		then(data) {
	// 			if (!data.trainings) {
	// 				base.post(`${uid}`, {
	// 					data: {
	// 						trainings: {
	// 							'2019-01-01': { Örnek: { sets: [[80, 10]], isPyramid: false } }
	// 						}
	// 					}
	// 				});
	// 			}
	// 			base.syncState(`${uid}`, {
	// 				context: this,
	// 				state: 'user'
	// 			});
	// 			localStorage.setItem('weightlifter', `${uid}`);
	// 		}
	// 	});
	// 	this.setState({
	// 		auth: uid
	// 	});
	// };
	render() {
		// const { auth, user } = this.state;
		// if (!auth) {
		// 	return (
		// 		<>
		// 			<h1 className="display-4 text-center">T R A C K E R</h1>
		// 			<Login handleClick={this.handleClick} />
		// 		</>
		// 	);
		// }
		// if (auth && Object.prototype.hasOwnProperty.call(user.trainings, 'loading') {
		// 	return <Loading className="loading" />;
		// }
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export const Consumer = Context.Consumer;
