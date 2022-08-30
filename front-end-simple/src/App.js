import { useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import BooksTable from "./components/tables/BooksTable";
import NewBookBtn from "./components/modals/NewBookBtn";
import NewBookModal from "./components/modals/NewBookModal";

function App() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const handleOpen = () => setIsBookModalOpen(true);
  const handleClose = () => setIsBookModalOpen(false);

  return (
    <div className="App">
      <Navbar />
      <div className="main container">
        <BooksTable />
        <NewBookBtn open={isBookModalOpen} handleOpen={handleOpen} />
        {/* <NewBookModal isOpen={isBookModalOpen} onClose={handleClose} /> */}
        <Modal id="newBookModal" open={isBookModalOpen} onClose={handleClose}>
          <Box sx={{ bgcolor: 0 }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title ml-4">New Book</h5>
                  <button
                    type="button"
                    className="close text-light cancel-form-modal"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={handleClose}
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body"></div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default App;
