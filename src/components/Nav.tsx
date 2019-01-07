import React from 'react';
import { ReactComponent as Dumbbell } from '../assets/dumbbell-solid.svg';
import { ReactComponent as Plus } from '../assets/plus-solid.svg';

// TODO: SIGNOUT YAPILACAK.
const Nav = () => {
	return (
		<nav className="d-flex fixed-bottom justify-content-around bg-dark">
			<a href="#" className="text-light">
				<Dumbbell className="icon" />
			</a>
			<a href="#" className="text-light">
				<Plus className="icon" />
			</a>
		</nav>
	);
};

export default Nav;
