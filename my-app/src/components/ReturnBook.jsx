import React, { useState } from "react";
import axios from "axios";

function ReturnBook() {
  const [userId, setUserId] = useState("");
  const [bookId, setBookId] = useState("");

  const handleReturn = async () => {
    await axios.post(`http://localhost:5000/api/books/return/${bookId}`, { userId });
    alert("Book returned");
    setBookId("");
  };

  return (
    <div className="mb-3">
      <h5>Return Book</h5>
      <input className="form-control mb-2" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <input className="form-control mb-2" placeholder="Book ID" value={bookId} onChange={(e) => setBookId(e.target.value)} />
      <button className="btn btn-secondary" onClick={handleReturn}>Return</button>
    </div>
  );
}

export default ReturnBook;
