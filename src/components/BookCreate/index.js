/* eslint-disable jsx-a11y/heading-has-content */

// Importing React and React Hooks
import { useState } from "react";

// Importing a custom hook
import { useBooksContext } from "../../customHooks/useBooksContext";

export default function BookCreate() {
  const [title, setTitle] = useState("");

  const { createBook } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    createBook(title);

    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label> Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create!!</button>
      </form>
    </div>
  );
}
