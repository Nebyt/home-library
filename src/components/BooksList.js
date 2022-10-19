import React, {useState} from 'react';
import style from './style';
import booksStorage from '../booksStorage/booksStorage';
import BookItem from "./BookItem";
import TopPanel from "./TopPanel";

const BooksList = () => {
  const [filteredList, setFilteredList] = new useState(booksStorage);

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of books storage
    let updatedList = [...booksStorage];
    // Include all elements which includes the search query
    updatedList = updatedList.filter(item =>
      item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      || item.author.firstName.toLowerCase().indexOf(query.toLowerCase()) !== -1
      || item.author.lastName.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
    setFilteredList(updatedList);
  };

  return (
    <div style={style.booksList}>
      <TopPanel booksAmount={booksStorage.length} onChange={filterBySearch} />
      {filteredList.map(book =>
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