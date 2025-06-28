import React from "react";
import { useState } from "react";
import axios from "axios";

export default function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("", { title, author, category });
    alert("Book added!");
    setTitle("");
    setAuthor("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <h5>Add Book</h5>
      <input
        className="form-control mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="form-control mb-2"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        className="form-control mb-2"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button className="btn btn-success">Add Book</button>
    </form>
  );
}
