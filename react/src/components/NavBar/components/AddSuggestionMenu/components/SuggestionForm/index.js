import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './styles.css';
import strings from './strings.js';

let SuggestionForm = props => {
  return (
    <form onSubmit={props.submitHandler}>
      <div className="navbar-add-suggestion-modal-field-group">
        <h4 className="navbar-add-suggestion-modal-field-title" htmlFor="title">Nombre</h4>
        <Field
          name="title"
          component="input"
          type="text"
          className="navbar-add-suggestion-modal-field"
          validate={(val) => val ? undefined : strings.titlerequired}
        />
      </div>
      <div className="navbar-add-suggestion-modal-field-group">
        <h4 className="navbar-add-suggestion-modal-field-title" htmlFor="author">Autor</h4>
        <Field
          name="author"
          component="input"
          type="text"
          className="navbar-add-suggestion-modal-field"
          validate={(val) => val ? undefined : strings.authorrequired}
        />
      </div>
      <div className="navbar-add-suggestion-modal-fields-inline">
        <div className="navbar-add-suggestion-modal-field-group">
          <h4 className="navbar-add-suggestion-modal-field-title" htmlFor="price">Precio</h4>
          <Field name="price" component="input" type="number" className="navbar-add-suggestion-modal-field" />
        </div>
        <div className="navbar-add-suggestion-modal-field-group">
          <h4 className="navbar-add-suggestion-modal-field-title" htmlFor="year">Año</h4>
          <Field name="year" component="input" type="number" className="navbar-add-suggestion-modal-field" />
        </div>
      </div>
      <div className="navbar-add-suggestion-modal-field-group">
        <h4 className="navbar-add-suggestion-modal-field-title" htmlFor="editorial">Editorial</h4>
        <Field name="editorial" component="input" type="text" className="navbar-add-suggestion-modal-field" />
      </div>
      <div className="navbar-add-suggestion-modal-field-group">
        <h4 className="navbar-add-suggestion-modal-field-title" htmlFor="link">Link</h4>
        <Field
          name="link"
          component="input"
          type="text"
          className="navbar-add-suggestion-modal-field"
          validate={(val) => val ? undefined : strings.linkrequired}
        />
      </div>
      <div className="navbar-add-suggestion-modal-button-group">
        <button className="navbar-add-suggestion-modal-button-cancel" onClick={props.onCancelClick}>Cancelar</button>
        <button className="navbar-add-suggestion-modal-button-accept" type="submit">Aceptar</button>
      </div>
    </form>
  );
};

SuggestionForm = reduxForm({
  // a unique name for the form
  form: 'suggestion'
})(SuggestionForm);

export default SuggestionForm;
