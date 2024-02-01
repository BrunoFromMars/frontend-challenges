import React from "react";
import {
  AppContainer,
  BookCoverWrapper,
  BooksContainer,
  BooksListContainer,
  ReadingListBookWrapper,
  ReadingListContainer,
  ReadingListWrapper,
  StyledHr,
  TitleDiv,
} from "./App.styled";
import { Book, initailBooksList } from "./books";
import { BookCover } from "./BookCover/BookCover";

const App: React.FC = () => {
  const [booksList, setBooksList] = React.useState<Book[]>(initailBooksList);
  const [readingList, setReadingList] = React.useState<Book[]>([]);

  const handlebookListClick = (book: Book) => {
    setBooksList((previousList) =>
      previousList.filter((previousBook) => previousBook.id !== book.id)
    );
    setReadingList((previousList) => [...previousList, book]);
  };

  return (
    <AppContainer>
      <BooksContainer>
        <BooksListContainer
          layout
          layoutId="bookslistcontainer"
          transition={{ duration: 0.5 }}
        >
          {booksList.map((book) => (
            <BookCoverWrapper
              key={book.id}
              onClick={() => handlebookListClick(book)}
              layoutId={book.id}
              transition={{ duration: 0.5 }}
            >
              <BookCover book={book} />
            </BookCoverWrapper>
          ))}
        </BooksListContainer>
        {readingList.length > 0 && (
          <ReadingListContainer>
            <TitleDiv>Reading List</TitleDiv>
            <StyledHr></StyledHr>
            <ReadingListWrapper>
              {readingList.map((book) => {
                return (
                  <ReadingListBookWrapper
                    key={book.id}
                    layoutId={book.id}
                    transition={{ duration: 0.5 }}
                  >
                    <BookCover book={book} />
                  </ReadingListBookWrapper>
                );
              })}
            </ReadingListWrapper>
          </ReadingListContainer>
        )}
      </BooksContainer>
    </AppContainer>
  );
};

export default App;
