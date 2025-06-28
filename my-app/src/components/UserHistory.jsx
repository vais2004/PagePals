import React, { useState } from "react";
import axios from "axios";

function UserHistory() {
  const [userId, setUserId] = useState("");
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    const res = await axios.get(`http://localhost:5000/api/users/${userId}/history`);
    setHistory(res.data);
  };

  return (
    <div className="mb-3">
      <h5>User Borrow History</h5>
      <input className="form-control mb-2" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <button className="btn btn-info mb-2" onClick={fetchHistory}>Get History</button>
      <ul className="list-group">
        {history.map((entry) => (
          <li key={entry._id} className="list-group-item">
            {entry.bookId.title} by {entry.bookId.author} | Borrowed: {new Date(entry.borrowDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserHistory;
