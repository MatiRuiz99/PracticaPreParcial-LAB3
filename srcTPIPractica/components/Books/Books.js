import { BookItem } from "../BookItem/BookItem";
import "./Books.css";

const Books = ({ books, filterYear }) => {
  if (books.length === 0) {
    return <></>;
  }

  const booksMapped = books
    .filter((book) => book.date.getFullYear().toString() === filterYear)
    .map((book) => (
      <BookItem
        key={book.id}
        title={book.title}
        author={book.author}
        date={book.date}
        pages={book.pages}
      />
    ));

  return (
    <div className="books">
      {booksMapped.length === 0 ? (
        <p>No leiste libros en {filterYear}</p>
      ) : (
        booksMapped
      )}
    </div>
  );
};

export default Books;
