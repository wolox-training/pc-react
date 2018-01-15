import React from 'react';

import './styles.css';

const InputField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className="input-field-group">
    <h4 className="input-field-title">{label}</h4>
    <input
      {...input}
      placeholder={label}
      type={type}
      className={`input-field ${touched ? error && 'input-field-error' : ''}`}/>
    {touched &&
      (error && <span className="input-error">{error}</span>)}
  </div>
);

export default InputField;
