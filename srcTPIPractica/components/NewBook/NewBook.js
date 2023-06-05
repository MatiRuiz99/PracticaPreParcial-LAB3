import React from "react";
import "./NewBook.css";
import BookForm from "../BookForm/BookForm.js";

export const NewBook = ({ pasoAAPP }) => {
  const saveBookDataHandler = (enteredBookData) => {
    const bookData = {
      ...enteredBookData,
      id: Math.random().toString(),
    };
    pasoAAPP(bookData);
  };

  return (
    <div className="new-book">
      <BookForm OnBookDataSaved={saveBookDataHandler} />
    </div>
  );
};
