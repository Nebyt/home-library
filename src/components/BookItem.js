import React from 'react';
import style from './style';
import useCollapse from 'react-collapsed';
import AuthorField from "./AuthorField";

const BookItem = ({authors, title, ISBN, publisher, publishYear}) => {
  const {getCollapseProps, getToggleProps} = useCollapse();

  return (
    <div style={style.bookRowItem}>
      <div {...getToggleProps()}>
        <div style={style.bookAuthor}>
          <label>
            <AuthorField authors={authors} />
          </label>
        </div>
        <div style={style.bookTitle}>
          <label>
            {title}
          </label>
        </div>
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