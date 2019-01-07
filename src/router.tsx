import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Workouts from './components/Workouts';
import AddWorkout from './components/AddWorkout';

function router() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Workouts} />
				<Route path="/add" component={AddWorkout} />
			</Switch>
		</Router>
	);
}

export default router;
