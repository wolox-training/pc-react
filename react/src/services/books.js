import api from '../config/service';

export default {
  getBooksService: () => {
    return api.get(
      '/books'
    );
  },
  getBookService: (bookId) => {
    return api.get(
      `/books/${bookId}`
    );
  },
  getBookRentsService: (bookId) => {
    return api.get(
      `/books/${bookId}/rents`
    );
  },
  getBookWishesService: (userId) => {
    return api.get(
      `/users/${userId}/wishes`
    );
  },
  getUserData: () => {
    return api.get('/users/me');
  },
  postWishlist: (bookId, userId) => {
    return api.post(
      `/users/${userId}/wishes`,
      {
        wish: {
          book_id: bookId,
          user_id: userId
        }
      }
    );
  }
};
