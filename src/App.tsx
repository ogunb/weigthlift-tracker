import React, { Component } from 'react';
import { Provider } from './context';
import Trainings from './components/Trainings';
import { ReactComponent as Dumbbell } from './assets/dumbbell-solid.svg';
import { ReactComponent as Plus } from './assets/plus-solid.svg';
import { ReactComponent as BestTop } from './assets/best.svg';

class App extends Component {
	render() {
		return (
			<Provider>
				<div className="App container-fluid">
					<h1 className="display-4 text-center">T R A C K E R</h1>
					<Trainings />
					<nav className="d-flex fixed-bottom justify-content-around">
						<a href="#" className="text-dark">
							<Dumbbell className="icon" />
						</a>
						<a href="#" className="text-dark">
							<BestTop className="icon" />
						</a>
						<a href="#" className="text-dark">
							<Plus className="icon" />
						</a>
					</nav>
				</div>
			</Provider>
		);
	}
}

export default App;
