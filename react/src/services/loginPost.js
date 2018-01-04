import api from './config';

const postLogin = (email, password) => api.post(
  '/users/sessions',
  {email: email, password: password}
);

export default postLogin;
