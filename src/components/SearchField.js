import React from 'react';
import TextField from './TextField';

const SearchField = ({...rest}) => (
  <TextField name="search" label="Поиск: " {...rest} />
);

export default SearchField;