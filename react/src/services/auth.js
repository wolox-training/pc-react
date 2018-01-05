import api from '../config/service';

export const postLogin = (email, password) => api.post(
  '/users/sessions',
  {email: email, password: password}
);

export const postSignUp = (email, password, confirm_password, first_name, last_name) => api.post(
  '/users',
  {email, password, confirm_password, first_name, last_name, locale: 'en'}
);
