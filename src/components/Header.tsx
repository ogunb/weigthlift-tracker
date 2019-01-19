import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<Link to="/" className="heading">
			<h1 className="display-4 text-center">TRACKER</h1>
		</Link>
	);
}

export default Header;
