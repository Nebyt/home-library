import React from 'react';
import style from './style';
import booksStorage from '../booksStorage/booksStorage';
import BookItem from "./BookItem";

const BooksList = () => (
  <div style={style.booksList}>
    {booksStorage.map(book =>
      <BookItem
        author={book.author}
        title={book.title}
        ISBN={book.ISBN}
        publisher={book.publisher}
        publishYear={book.publishYear}
      />)}
  </div>
);

export default BooksList;