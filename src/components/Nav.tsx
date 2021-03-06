import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Dumbbell } from '../assets/dumbbell-solid.svg';
import { ReactComponent as Plus } from '../assets/plus-solid.svg';

const Nav = (props: any) => {
	function onSignOut() {
		props.signOut();
	}
	return (
		<nav className="d-flex fixed-bottom justify-content-around bg-primary">
			<button
				className="btn btn-warning rounded-0 font-weight-bold"
				onClick={onSignOut}
			>
				logout
			</button>
			<Link to="/" className="text-light w-100 text-center">
				<Dumbbell className="icon" />
			</Link>
			<Link to="/add" className="text-light w-100 text-center">
				<Plus className="icon" />
			</Link>
		</nav>
	);
};

export default Nav;
