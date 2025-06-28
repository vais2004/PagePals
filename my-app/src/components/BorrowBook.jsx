import React, { useState } from "react";
import axios from "axios";

function BorrowBook() {
  const [userId, setUserId] = useState("");
  const [bookId, setBookId] = useState("");

  const handleBorrow = async () => {
    await axios.post(`http://localhost:5000/api/books/borrow/${bookId}`, { userId });
    alert("Book borrowed");
    setBookId("");
  };

  return (
    <div className="mb-3">
      <h5>Borrow Book</h5>
      <input className="form-control mb-2" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <input className="form-control mb-2" placeholder="Book ID" value={bookId} onChange={(e) => setBookId(e.target.value)} />
      <button className="btn btn-warning" onClick={handleBorrow}>Borrow</button>
    </div>
  );
}

export default BorrowBook;
