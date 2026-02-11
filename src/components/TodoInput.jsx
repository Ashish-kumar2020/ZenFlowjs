import React from "react";

const TodoInput = ({type,value,onChange,placeholder,className}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    />
  );
};

export default TodoInput;
