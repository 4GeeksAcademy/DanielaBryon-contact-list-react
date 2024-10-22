import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddContacts from "./views/addContacts";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Home } from "./views/home";
import ContactsList from "./views/contactsList";
import EditContact from "./views/editContact";
import { Footer } from "./component/footer"

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contactsList" element={<ContactsList />} />
					<Route path="/addContacts" element={<AddContacts />} />
					<Route path="/editContact/:id" element={<EditContact />} />
					<Route path="*" element={<h1>Not found!</h1>} />
					{/* <Route path="/card" element={<ContactCard />} /> */}
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
};

export default injectContext(Layout);
