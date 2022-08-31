import React from "react";
import { Box, Modal, Typography } from "@mui/material";
import NewBookForm from "../forms/NewBookForm";

const NewBookModal = ({ isOpen, handleClose }) => {
  //   const closeModal = () => handleClose();
  return (
    <Modal id="newBookModal" open={isOpen} onClose={handleClose}>
      <Box sx={{ bgcolor: 0, outline: 0 }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title ml-4">New Book</h5>
              <button
                type="button"
                className="close text-light cancel-form-modal"
                data-dismiss="modal"
                aria-label="Close"
                onClick={(e) => handleClose()}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <NewBookForm handleClose={handleClose} />
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default NewBookModal;
