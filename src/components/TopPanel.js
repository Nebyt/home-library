import React from 'react';
import SearchField from "./SearchField";
import style from "./style";

const TopPanel = ({booksAmount, ...rest}) => (
  <div style={style.topPanel}>
    <label>Книг в библиотеке: {booksAmount}</label>
    <SearchField {...rest} />
  </div>
);

export default TopPanel;