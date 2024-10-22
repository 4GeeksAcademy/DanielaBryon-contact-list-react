import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/addContacts.css"





const AddContacts = () => {
    const { actions } = useContext(Context);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleAddContact = (e) => {
        e.preventDefault();
        console.log(form)
        actions.addContact(form);

        setForm({
            name: "",
            email: "",
            phone: "",
            address: "",
        });
        window.alert("You add a new one!");
    }
    return (
        <div className="container">
            <h1 className="text-center">Add a New Contact</h1>
            <form onSubmit={handleAddContact}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">Full Name</label>
                    <input name="name" value={form.name} onChange={handleChange} type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold">Email address</label>
                    <input name="email" value={form.email} onChange={handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label fw-bold">Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange} type="number" className="form-control" id="exampleNumberEmail1" aria-describedby="numberHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label fw-bold">Address</label>
                    <input name="address" value={form.address} onChange={handleChange} type="text" className="form-control" id="exampleInputAddress" aria-describedby="addressHelp" required />
                </div>
                <button type="submit" className="save-btn w-100 btn">Save changes</button>
            </form>
            <Link className="back-btn mt-3 btn" to={"/"}>Go Back to Home</Link>
        </div>
    )
};

export default AddContacts;