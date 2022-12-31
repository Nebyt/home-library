import React from 'react';
import SearchField from "./SearchField";

const TopPanel = ({booksAmount, ...rest}) => (
  <div className="
    border
    border-black
    rounded-lg
    w-full
    bg-leaf-pattern
    bg-stone-200
    md:flex
    md:justify-between
    m-5
    p-4
    md:p-8
    text-lg">
    <div>
      <label className="text-xl">Книг в библиотеке: </label>
      <label className="text-lg font-bold">{booksAmount}</label>
    </div>
    <div>
      <SearchField {...rest} />
    </div>
  </div>
);

export default TopPanel;