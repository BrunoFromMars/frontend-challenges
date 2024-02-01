import React from "react";
import { Book } from "../books";
import { CoverImg } from "./BookCover.styled";

type BookCoverProps = {
  book: Book;
};

export const BookCover: React.FC<BookCoverProps> = ({ book }) => {
  return <CoverImg src={`/${book.name}-min.jpg`} alt={book.name} />;
};
