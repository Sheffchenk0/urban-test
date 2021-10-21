import React from 'react';

const Input = ({ id, title, value, onChange }) => {
  return (
    <div>
      <label htmlFor={title + id}>{title}</label>
      <input id={title + id} type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
