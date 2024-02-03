import { motion } from "framer-motion";
import React from "react";
import { Book } from "./books";

type BooksListContainerProps = {
  booksList: Book[];
  handlebookListClick: (book: Book) => void;
};
export const BooksListContainer: React.FC<BooksListContainerProps> = ({
  booksList,
  handlebookListClick,
}) => {
  return (
    <motion.div
      className="books-list-container-wrapper"
      layout
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 60,
      }}
    >
      <div className="books-list-container">
        {booksList.map((book) => (
          <motion.img
            src={`/${book.name}-min.jpg`}
            alt={book.name}
            key={book.id}
            className="book-list-image"
            onClick={() => handlebookListClick(book)}
            layoutId={book.id}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 60,
            }}
            draggable={false}
          />
        ))}
      </div>
    </motion.div>
  );
};
