import React from "react";
import "./styles/new_book_btn.css";

const NewBookBtn = ({ open, handleOpen }) => {
  const handleClick = () => handleOpen();

  return (
    <div
      id="addBook"
      className="btn btn-success btn-sm btn-rounded"
      onClick={handleClick}
    >
      <ion-icon name="add-outline" className="add-icon"></ion-icon>
    </div>
  );
};

export default NewBookBtn;
