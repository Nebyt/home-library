import React from 'react'

const TextField = ({onChange, label}) => (
  <label className="text-lg font-bold">
    {label}
    <input
      className="mt-2"
      type="text"
      onChange={onChange}
    />
  </label>
);

export default TextField;