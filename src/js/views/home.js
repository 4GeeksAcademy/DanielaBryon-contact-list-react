import React from "react";
import Header from "../../img/header.png"
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center">
		<img className="img-header" src={Header} alt="header" />
		<h1>Welcome to your agend</h1>
		<p>Add your contacts now to easily manage your relationships and</p>
		<p> never miss an important moment.</p>
		<Link className="btnContact mb-2 btn " to={"/addContacts"}>Add contacts</Link>

	</div>


);


