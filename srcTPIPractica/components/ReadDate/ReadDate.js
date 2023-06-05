import React from "react";
import "./ReadDate.css";

export const ReadDate = ({ date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("es-AR", { month: "long" });
  const day = date.toLocaleString("es-AR", { day: "2-digit" });

  return (
    <div className="date-container">
      <div>{year}</div>
      <div>{month}</div>
      <div>{day}</div>
    </div>
  );
};
