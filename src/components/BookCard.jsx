const BookCard = ({ book, addToBookshelf, isAdded, hide }) => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {book.title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {book.author_name}
      </p>

      {hide && (
        <>
          {isAdded ? (
            <button
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              disabled
            >
              Added
            </button>
          ) : (
            <button
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={addToBookshelf}
            >
              Add to Bookshelf
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default BookCard;
