import BookSearch from "./pages/BookSearch";
import BookShelf from "./pages/BookShelf";
import { useState } from "react";
const App = () => {
  const [bookshelfPage, setBookshelfPage] = useState(false);

  const tooglePage = () => {
    setBookshelfPage(!bookshelfPage);
  };
  return (
    <div className="w-full min-h-screen bg-indigo-400">
      <div className="w-full h-20 bg-yellow-400 flex justify-end items-center gap-6">
        <button
          className="mx-10 hover:text-white font-semibold"
          onClick={tooglePage}
        >
          MyBookshelf
        </button>
      </div>
      {bookshelfPage ? <BookShelf /> : <BookSearch />}
    </div>
  );
};
export default App;
