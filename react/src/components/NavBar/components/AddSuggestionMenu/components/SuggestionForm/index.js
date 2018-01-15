import React from 'react';
import { Field, reduxForm } from 'redux-form';

import {required} from '../../../../../../utils/validations';
import InputField from '../../../../../InputField';

import './styles.css';

let SuggestionForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="title"
        label="Nombre"
        component={InputField}
        type="text"
        validate={required}
      />
      <Field
        name="author"
        label="Autor"
        component={InputField}
        type="text"
        validate={required}
      />
      <div className="navbar-add-suggestion-modal-fields-inline">
        <Field
          name="price"
          label="Precio"
          component={InputField}
          type="number"
        />
        <Field
          name="year"
          label="Año"
          component={InputField}
          type="number"
        />
      </div>
      <Field
        name="editorial"
        label="Editorial"
        component={InputField}
        type="text"
      />
      <Field
        name="link"
        label="Link"
        component={InputField}
        type="text"
        validate={required}
      />
      <div className="navbar-add-suggestion-modal-button-group">
        <button className="navbar-add-suggestion-modal-button-cancel" onClick={props.onCancelClick}>Cancelar</button>
        <button className="navbar-add-suggestion-modal-button-accept" type="submit" disabled={props.loading}>Aceptar</button>
      </div>
    </form>
  );
};

SuggestionForm = reduxForm({
  // a unique name for the form
  form: 'suggestion'
})(SuggestionForm);

export default SuggestionForm;
