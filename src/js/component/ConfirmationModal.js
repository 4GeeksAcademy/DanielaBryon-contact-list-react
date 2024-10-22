import React from "react";


const ConfirmationModal = ({ isVisible, onClose, onConfirm }) => {
    if (!isVisible) return null;

    return (
        <div className="modal show" style={{ display: "block" }} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Delete confirmation</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        Are you sure?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelete</button>
                        <button type="button" className="btn btn-danger" onClick={onConfirm}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
      );
    };
    
    export default ConfirmationModal;