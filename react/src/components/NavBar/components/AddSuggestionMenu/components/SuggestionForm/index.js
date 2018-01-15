import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './styles.css';

const required = value => (value ? undefined : 'Required')

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className="navbar-add-suggestion-modal-field-group">
    <h4 className="navbar-add-suggestion-modal-field-title">{label}</h4>
    <div>
      <input {...input} placeholder={label} type={type} className="navbar-add-suggestion-modal-field"/>
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

let SuggestionForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="title"
        label="Nombre"
        component={renderField}
        type="text"
        validate={required}
      />
      <Field
        name="author"
        label="Autor"
        component={renderField}
        type="text"
        validate={required}
      />
      <div className="navbar-add-suggestion-modal-fields-inline">
        <Field
          name="price"
          label="Precio"
          component={renderField}
          type="number"
        />
        <Field
          name="year"
          label="Año"
          component={renderField}
          type="number"
        />
      </div>
      <Field
        name="editorial"
        label="Editorial"
        component={renderField}
        type="text"
      />
      <Field
        name="link"
        label="Link"
        component={renderField}
        type="text"
        validate={required}
      />
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
