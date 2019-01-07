import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Trainings from './components/Trainings';
import AddWorkout from './components/AddWorkout';

function router() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Trainings} />
				<Route path="/add" component={AddWorkout} />
			</Switch>
		</Router>
	);
}

export default router;
