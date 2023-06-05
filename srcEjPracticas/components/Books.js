import React from "react";

function Books({ title, rating }) {
  const fontWeight = rating > 9 ? "bold" : "normal";
  return (
    <>
      <h1 style={{ fontWeight }}>{title}</h1>
      <p style={{ fontWeight }}>{rating}</p>
    </>
  );
}

export default Books;

const books = [
  { title: "El Quijote de la Mancha", rating: 7.9 },
  { title: "El señor de los anillos", rating: 8.1 },
  { title: "Dune", rating: 7.8 },
  { title: "Martín Fierro", rating: 9.2 },
];
function App() {
  const librosMayores = books.filter((book) => book.rating > 8);

  return (
    <>
      {librosMayores.map((book) => (
        <Books title={book.title} rating={book.rating} />
      ))}
    </>
  );
}
