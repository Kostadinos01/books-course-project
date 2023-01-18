// Importing a custom hook
import { useBooksContext } from "../../customHooks/useBooksContext";

// Importing components
import BookShow from "../BookShow";

export default function BookList() {
  const { books } = useBooksContext();

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}
