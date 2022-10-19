import React from 'react'

const TextField = ({onChange, label}) => (
  <label>
    {label}
    <input
      type="text"
      onChange={onChange}
    />
  </label>
);

export default TextField;