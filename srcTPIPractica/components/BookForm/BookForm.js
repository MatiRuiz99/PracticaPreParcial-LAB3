import React from "react";
import "./BookForm.css";
import { useState, useEffect } from "react";

function BookForm({ OnBookDataSaved }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredPages, setEnteredPages] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Check form");
      setFormValid(
        enteredTitle && enteredAuthor && enteredPages && enteredDate
      );
    }, 500);

    return () => {
      console.log("Cleanup");
      clearTimeout(timer);
    };
  }, [enteredTitle, enteredAuthor, enteredPages, enteredDate]);

  const changeNewTitle = (event) => {
    setEnteredTitle(event.target.value);
  };
  const changeNewAuthor = (event) => {
    setEnteredAuthor(event.target.value);
  };
  const changeNewPages = (event) => {
    setEnteredPages(event.target.value);
  };
  const changeNewDate = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitBookHandler = (event) => {
    event.preventDefault();
    const bookData = {
      id: Math.random(),
      title: enteredTitle,
      author: enteredAuthor,
      pages: enteredPages,
      date: new Date(enteredDate),
    };

    OnBookDataSaved(bookData);
    setEnteredTitle("");
    setEnteredAuthor("");
    setEnteredPages("");
    setEnteredDate("");
  };
  return (
    <form>
      <div className="new-book.control">
        <div className="new-book-control">
          <label>Título</label>
          <input type="text" value={enteredTitle} onChange={changeNewTitle} />
        </div>
        <div className="new-book-control">
          <label>Autor</label>
          <input type="text" value={enteredAuthor} onChange={changeNewAuthor} />
        </div>
        <div className="new-book-control">
          <label>Páginas</label>
          <input
            type="number"
            min="1"
            step="1"
            value={enteredPages}
            onChange={changeNewPages}
          />
        </div>
        <div className="new-book-control">
          <label>¿Cuando terminaste de leerlo?</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-05-02"
            value={enteredDate}
            onChange={changeNewDate}
          />
        </div>
        <div className="new-book-actions">
          <button
            type="submit"
            disabled={!formValid}
            onClick={submitBookHandler}
          >
            Agregar
          </button>
        </div>
      </div>
    </form>
  );
}

export default BookForm;
