import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Dumbbell } from '../assets/dumbbell-solid.svg';
import { ReactComponent as Plus } from '../assets/plus-solid.svg';

// TODO: SIGNOUT YAPILACAK.
const Nav = () => {
	function signOut(): void {
		console.log('değişecek');
	}
	return (
		<nav className="d-flex fixed-bottom justify-content-around bg-dark">
			<Link to="/" className="text-light w-100 text-center">
				<Dumbbell className="icon" />
			</Link>
			<Link to="/add" className="text-light w-100 text-center">
				<Plus className="icon" />
			</Link>
			<button className="btn btn-primary" onClick={signOut}>
				Çıkış Yap
			</button>
		</nav>
	);
};

export default Nav;
