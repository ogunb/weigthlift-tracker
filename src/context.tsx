import React, { Component } from 'react';
import base, { firebaseApp } from './base';

const initialStore = {
	user: {
		trainings: {},
		bestTraining: {}
	}
};
const Context = React.createContext(initialStore);

const reducer = (state: object = {}, action: object) => {
	// switch (action.type) {
	// 	default:
	// 		return state;
	// }
};

export class Provider extends Component {
	state = {
		user: {
			trainings: {},
			bestTraining: {}
		},
		dispatch: (action: object) => {
			this.setState(state => reducer(state, action));
		}
	};
	componentDidMount() {
		// TODO: ileride username'e değiştirilecek
		base.syncState(`ogun`, {
			context: this,
			state: 'user'
		});
	}
	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export const Consumer = Context.Consumer;
