import { useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import BooksTable from "./components/tables/BooksTable";
import NewBookBtn from "./components/modals/NewBookBtn";
import NewBookModal from "./components/modals/NewBookModal";
import NewBookForm from "./components/forms/NewBookForm";

function App() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const handleOpen = () =>  setIsBookModalOpen(true);
  const handleClose = () => setIsBookModalOpen(false); 

  return (
    <div className="App">
      <Navbar />
      <div className="main container">
        <BooksTable />
        <NewBookBtn handleOpen={handleOpen} />
        <NewBookModal isOpen={isBookModalOpen} handleClose={handleClose} />
      </div>
    </div>
  );
}

export default App;
