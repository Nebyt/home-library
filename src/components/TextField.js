import React from 'react'
import style from "./style";

const TextField = ({onChange, label}) => (
  <div style={style.inputGroup}>
    <label>
      {label}
      <input
        style={style.input}
        type="text"
        onChange={onChange}
      />
    </label>
  </div>
);

export default TextField;