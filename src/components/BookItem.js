import React from 'react';
import useCollapse from 'react-collapsed';
import AuthorField from "./AuthorField";

const BookItem = ({authors, title, translator, ISBN, publisher, publishYear}) => {
  const {getCollapseProps, getToggleProps} = useCollapse();
  const renderIfSet = (fieldName, fieldValue) => {
    if (fieldValue && fieldValue !== "") {
      return <div>
        {fieldName}: {fieldValue}
      </div>
    }
  };

  return (
    <div className="border border-black rounded-lg w-full bg-aztec-pattern bg-blue-300 p-3 m-2.5">
      <div {...getToggleProps()}>
        <div className="mb-1.5 p-1 text-lg font-bold break-words">
          <label>
            <AuthorField authors={authors} />
          </label>
        </div>
        <div className="mb-1.5 pl-1 pr-1 text-xl break-words">
          <label>
            {title}
          </label>
        </div>
      </div>
      <div {...getCollapseProps()}>
        <div className="text-base text-stone-600 break-words">
          {renderIfSet("Переводчик", translator)}
          {renderIfSet("ISBN", ISBN)}
          {renderIfSet("Издательство", publisher)}
          {renderIfSet("Год издания", publishYear)}
        </div>
      </div>
    </div>
  );
};

export default BookItem;