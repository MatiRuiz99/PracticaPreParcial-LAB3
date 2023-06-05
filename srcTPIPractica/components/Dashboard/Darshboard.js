import { useState, useEffect } from "react";
import Books from "../Books/Books";
import { NewBook } from "../NewBook/NewBook";
import BooksFilter from "../BookFilter/BookFilter";
import { Button, Col, Row } from "react-bootstrap";

const BOOKS = [
  {
    id: 1,
    title: "100 años de soledad",
    author: "Gabriel García Marquez",
    date: new Date(2021, 8, 12),
    pages: 410,
  },
  {
    id: 2,
    title: "Todos los fuegos el fuego",
    author: "Julio Cortazar",
    date: new Date(2020, 6, 11),
    pages: 197,
  },
  {
    id: 3,
    title: "Asesinato en el Orient Express",
    author: "Agatha Christie",
    date: new Date(2021, 5, 9),
    pages: 256,
  },
  {
    id: 4,
    title: "Las dos torres",
    author: "J.R.R Tolkien",
    date: new Date(2020, 3, 22),
    pages: 352,
  },
];
const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [filterYear, setFilterYear] = useState("2023");

  useEffect(() => {
    console.log("useEffect on mount");
    //   const bookStoraged = JSON.parse(localStorage.getItem("books"));

    //   if (bookStoraged) {
    //     setBooks(
    //       bookStoraged.map((book) => ({
    //         ...book,
    //         date: new Date(book.date),
    //       }))
    //     );
    //   } else {
    //     localStorage.setItem("books", JSON.stringify(BOOKS));
    //   }
    // }, []);
    fetch("https://63a44a012a73744b0072f847.mockapi.io/api/books/Books", {
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((bookData) => {
        const booksMapped = bookData.map((book) => ({
          ...book,
          date: new Date(book.dateRead),
        }));
        setBooks(booksMapped);
      })
      .catch((error) => console.log(error));
  }, []);

  const filterYearChanged = (year) => {
    setFilterYear(year);
  };

  const addedBookHandler = (book) => {
    const newBooksArray = [book, ...books];
    setBooks(newBooksArray);
    localStorage.setItem("books", JSON.stringify(newBooksArray));
  };
  return (
    <>
      <Row className="me-2 my-4">
        <Col />
        <Col md={3} className="d-flex justify-content-end">
          <Button variant="primary">Cerrar sesion</Button>
        </Col>
      </Row>
      <NewBook pasoAAPP={addedBookHandler} />
      <BooksFilter
        filterYear={filterYear}
        onFilterYearChange={filterYearChanged}
      />
      <Books filterYear={filterYear} books={books} />
    </>
  );
};

export default Dashboard;
