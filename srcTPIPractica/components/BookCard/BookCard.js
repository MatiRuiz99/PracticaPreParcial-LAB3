import React from "react";
import "./BookCard.css";

export const BookCard = ({ children }) => {
  return <div className="book-item-container">{children}</div>;
};
