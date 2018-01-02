import React from 'react';

import './styles.css';

const InputWideWithHeader = props =>
  <div className="input-wide-with-header">
    <h4 className="input-wide-with-header-title">{props.header}</h4>
    <input id={props.id} type={props.type} className={`input-wide-with-header-text ${props.errorMessage && 'input-wide-with-header-text-error'}`} value={props.value} onChange={props.handler}/>
    {props.errorMessage && <p className="input-wide-with-header-error-message">{props.errorMessage}</p>}
  </div>;


export default InputWideWithHeader;
