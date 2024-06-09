import BookCard from "../components/BookCard";
import { useState, useEffect } from "react";
import TextMessgae from "../components/TextMessage";

const BookSearch = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [addedBooks, setAddedBooks] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (query.length > 2) {
        fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
          .then((response) => response.json())
          .then((data) => setBooks(data?.docs || []))
          .catch((error) => console.error("Error fetching data:", error));
      }
    }, 50);

    return () => clearTimeout(timerId);
  }, [query]);

  const addToBookshelf = (book, index) => {
    const existingBooks = JSON.parse(localStorage.getItem("bookshelf")) || [];

    const bookData = {
      index,
      title: book.title,
      author_name: book.author_name,
    };
    const updatedBooks = [...existingBooks, bookData];

    localStorage.setItem("bookshelf", JSON.stringify(updatedBooks));
    setAddedBooks([...addedBooks, index]);
  };

  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex flex-col justify-center items-center my-4 text-center">
        <h1 className="font-bold text-2xl">Search Books</h1>
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="outline-none border-0 text-md px-4 py-2 rounded-full mt-4 bg-slate-200"
        />
      </div>

      <div className="w-full flex flex-col gap-4 xs:ml-8 sm:ml-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 sm:gap-4">
        {query.length < 2 ? (
          <TextMessgae message="No results found" />
        ) : (
          <>
            {books.map((book, index) => (
              <BookCard
                key={index}
                book={book}
                addToBookshelf={() => addToBookshelf(book, index)}
                isAdded={addedBooks.includes(index)}
                hide="true"
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default BookSearch;
