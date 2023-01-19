// Importing React and React Hooks
import { useEffect } from "react";

// Importing a custom hook
import { useBooksContext } from "./customHooks/useBooksContext";

// Importing components
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
