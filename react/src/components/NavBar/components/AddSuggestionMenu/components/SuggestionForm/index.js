import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { required } from '../../../../../../utils/validations';
import InputField from '../../../../../InputField';

import fieldNames from './fieldNames.js';
import strings from './strings.js';
import './styles.css';

const SuggestionForm = ({handleSubmit, onCancelClick, loading}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name={fieldNames.titleName}
        label={strings.titleLabel}
        component={InputField}
        type="text"
        validate={required}
      />
      <Field
        name={fieldNames.authorName}
        label={strings.authorLabel}
        component={InputField}
        type="text"
        validate={required}
      />
      <div className="navbar-add-suggestion-modal-fields-inline">
        <Field
          name={fieldNames.priceName}
          label={strings.priceLabel}
          component={InputField}
          type="number"
        />
        <Field
          name={fieldNames.yearName}
          label={strings.yearLabel}
          component={InputField}
          type="number"
        />
      </div>
      <Field
        name={fieldNames.editorialName}
        label={strings.editorialLabel}
        component={InputField}
        type="text"
      />
      <Field
        name={fieldNames.linkName}
        label={strings.linkLabel}
        component={InputField}
        type="text"
        validate={required}
      />
      <div className="navbar-add-suggestion-modal-button-group">
        <button className="navbar-add-suggestion-modal-button-cancel" onClick={onCancelClick}>{strings.cancel}</button>
        <button className="navbar-add-suggestion-modal-button-accept" type="submit" disabled={loading}>{strings.accept}</button>
      </div>
    </form>
  );
};

export default reduxForm({form: 'suggestion'})(SuggestionForm);
