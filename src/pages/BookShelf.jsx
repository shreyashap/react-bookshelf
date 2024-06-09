import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import TextMessgae from "../components/TextMessage";

const BookShelf = () => {
  const [bookshelf, setBookShelf] = useState([]);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("bookshelf")) || [];
    setBookShelf(savedBooks);
  }, []);

  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex flex-col justify-center items-center my-4 text-center">
        <h1 className="font-bold text-2xl mb-4">Saved Books</h1>
        <div className="w-full flex flex-col gap-4 xs:ml-8 sm:ml-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 sm:gap-4">
          <>
            {bookshelf.length > 0 ? (
              <>
                {bookshelf.map((book, index) => (
                  <BookCard
                    key={index}
                    book={book}
                    addToBookshelf={() => {}}
                    isAdded={bookshelf.includes(index)}
                  />
                ))}
              </>
            ) : (
              <TextMessgae message="No saved books..." />
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default BookShelf;
