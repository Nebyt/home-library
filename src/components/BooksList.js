import React from 'react';
import BookItem from './BookItem';

const BooksList = ({books}) => {
  return (
    <div className="border border-black rounded-lg w-full bg-crosses-pattern bg-stone-200 grid justify-items-center p-5">
      {books.map(book =>
        <BookItem
        authors={book.authors}
        title={book.title}
        translator={book.translator}
        ISBN={book.ISBN}
        publisher={book.publisher}
        publishYear={book.publishYear}
        />
      )}
    </div>
  );
};

export default BooksList;