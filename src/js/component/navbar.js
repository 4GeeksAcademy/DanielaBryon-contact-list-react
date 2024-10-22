import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-navbar">
				<Link className="nav-link" to="/">Home</Link>
				<Link className="nav-link" to="/contactsList">My contact list</Link>
				<Link className="nav-link" to="addContacts">Add a contact</Link>
			</div>
		</nav>
	);
};
