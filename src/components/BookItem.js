import React from 'react';
import style from './style';
import useCollapse from 'react-collapsed';

const BookItem = ({author, title, ISBN, publisher, publishYear}) => {
  const {getCollapseProps, getToggleProps} = useCollapse();

  return (
    <div style={style.bookRowItem}>
      <div {...getToggleProps()}>
        <label style={style.bookAuthor}>
          {author.firstName} {author.lastName}.
        </label>
        <label style={style.bookTitle}>
          {title}
        </label>
      </div>
      <div {...getCollapseProps()}>
        <div style={style.bookAdditionalInfo}>
          <div>
            ISBN: {ISBN}
          </div>
          <div>
            Издательство: {publisher}
          </div>
          <div>
            Год издания: {publishYear}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookItem;