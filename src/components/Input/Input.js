import React from 'react';
import "./Input.css";

const Input = ({ label, type = 'text', placeholder, value, onChange, error, name }) => {
  return (
    <div className="input-container">
      <label htmlFor={name} className="input-label">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        className={`input-field ${error ? 'error' : ''}`}
      />
      {error && (
        <div className="input-error">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
