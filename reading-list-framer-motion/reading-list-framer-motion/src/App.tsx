import React from "react";
import { Book, initailBooksList } from "./books";
import "./App.css";
import { BooksListContainer } from "./BooksListCotainer";
import { ReadingListContainer } from "./ReadingListContainer";

const App: React.FC = () => {
  const [booksList, setBooksList] = React.useState<Book[]>(initailBooksList);
  const [readingList, setReadingList] = React.useState<Book[]>([]);

  const handlebookListClick = (book: Book) => {
    setBooksList((previousList) =>
      previousList.filter((previousBook) => previousBook.id !== book.id)
    );
    setReadingList((previousList) => [...previousList, book]);
  };

  const handlereadingListClick = (book: Book) => {
    setReadingList((previousList) =>
      previousList.filter((previousBook) => previousBook.id !== book.id)
    );
    setBooksList((previousList) => [...previousList, book]);
  };

  return (
    <div className="app-container">
      <div className="books-container">
        <BooksListContainer
          booksList={booksList}
          handlebookListClick={handlebookListClick}
        />
        <ReadingListContainer
          readingList={readingList}
          handlereadingListClick={handlereadingListClick}
        />
      </div>
    </div>
  );
};

export default App;
