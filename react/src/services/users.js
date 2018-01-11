import api from '../config/service';

export default {
  getConnectedUser: () => {
    return api.get('/users/me');
  },
  getBookWishesService: (userId) => {

    return api.get(
      `/users/${userId}/wishes`
    );
  },
  postWishlist: (bookId, userId) => {
    return api.post(
      `/users/${userId}/wishes`,
      {wish:{book_id: bookId, user_id: userId}}
    );
  },
  getReadBooks: userId => {
    return api.get(
      `/users/${userId}/rents`
    );
  },
  getBookComments: userId => {
    return api.get(
      `/users/${userId}/comments`
    );
  },
  getNotifications: userId => {
    return api.get(
      `/users/${userId}/notifications`
    );
  }
};
