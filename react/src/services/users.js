import api from '../config/service';

export const getConnectedUser = () => {
  return api.get('/users/me');
};
