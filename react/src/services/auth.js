import api from '../config/service';

export const postLogin = (email, password) => api.post(
  '/users/sessions',
  {email: email, password: password}
);

export const postSignUp = (email, password, password_confirmation, first_name, last_name) => api.post(
  '/users',
  {user:{email, password, password_confirmation, first_name, last_name, locale: 'en'}}
);
