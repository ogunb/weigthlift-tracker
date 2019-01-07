import React, { Component } from 'react';
import { Provider } from './context';
import Trainings from './components/Trainings';
import Nav from './components/Nav';
import Login from './components/Login';

class App extends Component {
	render() {
		return (
			<Provider>
				<div className="App container-fluid">
					<h1 className="display-4 text-center">T R A C K E R</h1>
					<Trainings />
					<Nav />
				</div>
			</Provider>
		);
	}
}

export default App;
