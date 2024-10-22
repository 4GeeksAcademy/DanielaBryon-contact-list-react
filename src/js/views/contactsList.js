import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import ContactCard from "../component/ContactCard";
import "../../styles/contactList.css"

const ContactsList = () => {
  const { store } = useContext(Context);

  return (

    <div className="container-btn mt-5 text-center">
      <Link className="btnContact mb-2 btn" to={"/addContacts"}>Add New Contact</Link>
      <div className="container-list mt-5 text-center">
        {store.contacts.length > 0 ? (
          store.contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        ) : (
          <h2 className="text-center mt-5">No contacts found!</h2>
        )}
      </div>
    </div>
  );
};

export default ContactsList;

