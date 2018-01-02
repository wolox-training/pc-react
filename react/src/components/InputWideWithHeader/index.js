import React from 'react';

import './styles.css';

const InputWideWithHeader = ({header, value, handler, id, errorMessage, type}) =>
  <div className="input-wide-with-header">
    <h4 className="input-wide-with-header-title">{header}</h4>
    <input
      type={type}
      className={`input-wide-with-header-text ${errorMessage && 'input-wide-with-header-text-error'}`}
      value={value}
      onChange={handler}
    />
    {errorMessage && <p className="input-wide-with-header-error-message">{errorMessage}</p>}
  </div>;


export default InputWideWithHeader;
