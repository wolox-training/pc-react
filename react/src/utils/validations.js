import Validator from 'email-validator';

import strings from './strings';

export const validateEmail = email => !Validator.validate(email) && strings.error_email_not_valid;
export const validatePasswordLength =
  password => !(password.length >= 8 && password.length <= 52) && strings.error_password_size;
export const validatePasswordContent =
  password => !(password.search(/\d/) !== -1 && password.search(/[a-zA-Z]/) !== -1) && strings.error_password_content;
export const validateNameContent =
  name => !(name.match(/^[A-Za-z\s]+$/)) && strings.error_name_content;
export const validateSurnameContent =
  surname => !(surname.match(/^[A-Za-z\s]+$/)) && strings.error_surname_content;
