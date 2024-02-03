import React from "react";
import { Book } from "./books";
import { AnimatePresence, motion } from "framer-motion";

type ReadingListContainerProps = {
  readingList: Book[];
  handlereadingListClick: (book: Book) => void;
};

export const ReadingListContainer: React.FC<ReadingListContainerProps> = ({
  readingList,
  handlereadingListClick,
}) => {
  const [hoveredBook, setHoveredBook] = React.useState<number>(Infinity);

  if (readingList.length === 0) {
    return <></>;
  }

  return (
    <div
      className="reading-list-container"
      onMouseLeave={() => setHoveredBook(Infinity)}
    >
      <div className="title-div">Reading List</div>
      <hr className="styled-hr"></hr>
      <div className="reading-list-books">
        {readingList.map((book, bookIndex) => {
          const wrapperHeight = `${
            100 - 10 * (readingList.length - 1 - bookIndex)
          }px`;
          return (
            <div
              key={book.id}
              style={
                {
                  height: hoveredBook === bookIndex ? `120px` : wrapperHeight,
                  position: "relative",
                } as React.CSSProperties
              }
            >
              <motion.img
                src={`/${book.name}-min.jpg`}
                alt={book.name}
                key={book.id}
                className="reading-list-book-image"
                layoutId={book.id}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 50,
                }}
                draggable={false}
                onMouseEnter={() => setHoveredBook(bookIndex)}
              />
              <AnimatePresence>
                <motion.button
                  layout="position"
                  className="delete-button"
                  onClick={() => handlereadingListClick(book)}
                  layoutId={`x-button-${book.id}`}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 50,
                  }}
                  onFocus={() => setHoveredBook(bookIndex)}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  X
                </motion.button>
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};
