import React, { Component } from 'react';
import Router from './router';
import { Provider } from './context';

class App extends Component {
	render() {
		return (
			<Provider>
				<Router />
			</Provider>
		);
	}
}

export default App;
