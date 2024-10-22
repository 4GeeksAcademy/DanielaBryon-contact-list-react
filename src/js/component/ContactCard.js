import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { BsGeoAltFill } from 'react-icons/bs';
import { FaPhoneFlip, FaEnvelope, FaPencil, FaRegTrashCan } from 'react-icons/fa6';
import ConfirmationModal from './ConfirmationModal';
import { Context } from "../store/appContext";
import "../../styles/contactCard.css"

const ContactCard = ({ contact }) => {
  const { actions } = useContext(Context);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();


  const generateRandomValues = () => {
    const randomNumber = Math.floor(Math.random() * 95);
    const gender = Math.random() < 0.5 ? "women" : "men";
    return { randomNumber, gender };
  };
  const { randomNumber, gender } = generateRandomValues();


  const deleteContact = () => {
    actions.deleteContact(contact.id);
    setShowModal(false);
  };

  const editContact = () => {
    navigate(`/editContact/${contact.id}`);
  };

  if (!contact) {
    return <div><h1>No contact data available</h1></div>;
  }

  return (
    <div className="contact-card mb-3">
      <img
        className="img-avatar rounded-circle"
        src={`https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`}
        alt={`${contact.name || "Unnamed"}'s avatar`}
      />
      <div className="card-body">
        <h5 className="card-title">{contact.name || "No Name"}</h5>
        <p className="card-text">
          <i><BsGeoAltFill /></i> {contact.address || "No Address"} <br />
          <i><FaPhoneFlip /></i> {contact.phone || "No Phone"} <br />
          <i><FaEnvelope /></i>{" "}
          <a href={`mailto:${contact.email || ""}`}>{contact.email || "No Email"}</a>
        </p>
        <div className="d-flex justify-content-between">
          <i onClick={editContact} className="p-1 text-secondary me-2"><FaPencil size="1.5em" /></i>
          <i onClick={() => setShowModal(true)} className="p-2 text-danger"><FaRegTrashCan size="1.5em" /></i>
        </div>
      </div>
      <ConfirmationModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={deleteContact}
      />
    </div>
  );
};

export default ContactCard;
