import React from "react";
import { useState } from "react";
import "./BookItem.css";
import { ReadDate } from "../ReadDate/ReadDate.js";
import { BookCard } from "../BookCard/BookCard";

export const BookItem = ({ key, title, author, date, pages }) => {
  const clickHandler = () => {
    if (newtitle === "Actualizado!") {
      setNewTitle(title);
    } else {
      setNewTitle("Actualizado!");
    }
  };

  const [newtitle, setNewTitle] = useState(title);

  return (
    <BookCard>
      <h2>{newtitle}</h2>
      <h3>{author}</h3>
      <ReadDate date={date} />
      <p>{pages} paginas</p>
      <button onClick={clickHandler}>le button</button>
    </BookCard>
  );
};
