import React from 'react';
import BookItem from './BookItem';

const BooksList = ({books}) => {
  const renderBooks = (listOfBooks) => {
    if (books.length == 0) {
      return <div>
        <label className="text-2xl font-semibold">Книги не найдены</label>
      </div>
    } else {
      return books.map(book =>
        <BookItem
        authors={book.authors}
        title={book.title}
        translator={book.translator}
        ISBN={book.ISBN}
        publisher={book.publisher}
        publishYear={book.publishYear}
        />
      )
    }
  };

  return (
    <div className="border border-black rounded-lg w-full bg-crosses-pattern bg-stone-200 grid justify-items-center p-5">
      {renderBooks(books)}
    </div>
  );
};

export default BooksList;