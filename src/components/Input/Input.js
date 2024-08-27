import React from 'react';

const Input = ({ label, type = 'text', placeholder, value, onChange, error }) => {
  return (
    <div style={{ margin: '10px 0' }}>
      <label style={{ display: 'block', marginBottom: '5px' }}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          padding: '8px',
          fontSize: '16px',
          borderRadius: '4px',
          border: `1px solid ${error ? 'red' : '#ccc'}`,
          width: '100%',
        }}
      />
      {error && (
        <div style={{ color: 'red', marginTop: '5px', fontSize: '14px' }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
