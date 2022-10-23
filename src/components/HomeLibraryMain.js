import React, {useState} from 'react';
import booksStorage from "../booksStorage/booksStorage";
import TopPanel from "./TopPanel";
import BooksList from "./BooksList";
import style from "./style";

const HomeLibraryMain = () => {
  const [filteredList, setFilteredList] = new useState(booksStorage);

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of books storage
    let updatedList = [...booksStorage];
    // Include all elements which includes the search query
    updatedList = updatedList.filter(item =>
      item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      || item.authors.filter(
        authorItem => authorItem.firstName.toLowerCase().indexOf(query.toLowerCase()) !== -1
        || authorItem.lastName.toLowerCase().indexOf(query.toLowerCase()) !== -1
        ).length > 0
    );
    setFilteredList(updatedList);
  };

  return (
    <div style={style.HomeLibraryMain}>
      <TopPanel booksAmount={booksStorage.length} onChange={filterBySearch} />
      <BooksList books={filteredList}/>
    </div>
  );
};

export default HomeLibraryMain;