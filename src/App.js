import "./App.css";
import "./assets/css/starter.css";
import bookstore from "./assets/media/bookstore.jpg";
import books from "./assets/data/books";
function App() {
  let bookStoreName = "Full Stack's Book Store";
  const displayHPBooks = books.map((book) => {
    return (
      <div className="book-container">
        <img src={book.image} alt="HP book 1" />
        <h3>{book.title}</h3>
        <p>{book.price}</p>
      </div>
    );
  });
  return (
    <div className="container">
      <h1>Welcome to {bookStoreName}</h1>
      <img src={bookstore} alt="Book store" className="bookstore-image" />

      <div className="book-section">{displayHPBooks}</div>
    </div>
  );
}

export default App;
