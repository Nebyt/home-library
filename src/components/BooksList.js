import React from 'react';
import style from './style';
import BookItem from './BookItem';

const BooksList = ({books}) => {
  return (
    <div style={style.booksList}>
      {books.map(book =>
        <BookItem
          author={book.author}
          title={book.title}
          ISBN={book.ISBN}
          publisher={book.publisher}
          publishYear={book.publishYear}
        />)}
    </div>
  );
};

export default BooksList;