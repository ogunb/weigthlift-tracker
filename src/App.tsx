import React, { Component } from 'react';
import Trainings from './components/Trainings';
import dumbbell from './assets/dumbbell-solid.svg';
import plus from './assets/plus-solid.svg';

class App extends Component {
	render() {
		return (
			<div className="App container-fluid">
				<h1 className="display-4 text-center">T R A C K E R</h1>
				<Trainings />
				<nav className="nav nav-pills d-flex flex-row justify-content-around fixed-bottom">
					<a className="" href="#">
						<img src={dumbbell} alt="antrenmanlar" className="icon" />
					</a>
					<a className="" href="#">
						<img src={plus} alt="yeni antrenman" className="icon" />
					</a>
				</nav>
			</div>
		);
	}
}

export default App;
