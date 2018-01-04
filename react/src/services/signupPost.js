import api from './config';

const postSignUp = (email, password, confirm_password, first_name, last_name) => api.post(
  '/users',
  {email, password, confirm_password, first_name, last_name, locale: 'en'}
);

export default postSignUp;
