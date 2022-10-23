import React from 'react';

const AuthorField = ({authors}) => {
  return (
    authors.map(
      (authorItem, index, authorArray) =>
        <label>
          {authorItem.firstName} {authorItem.lastName}
          {index + 1 === authorArray.length ? "" : ", " }
        </label>
    )
  );
};

export default AuthorField;