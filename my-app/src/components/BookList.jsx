import React, { useState, useEffect } from "react";
import axios from "axios";

function BookList() {
  const [books, setBooks] = useState([]);
  const [author, setAuthor] = useState("");

  const fetchBooks = async () => {
    const res = await axios.get(`http://localhost:5000/api/books?author=${author}`);
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, [author]);

  return (
    <div className="mb-3">
      <h5>Book List</h5>
      <input
        className="form-control mb-2"
        placeholder="Filter by author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <ul className="list-group">
        {books.map((book) => (
          <li key={book._id} className="list-group-item">
            <b>{book.title}</b> by {book.author} [{book.category}] - {book.available ? "Available" : "Borrowed"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
