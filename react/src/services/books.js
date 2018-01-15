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
  },
  getBookCommentaries: (bookId) => {
    return api.get(
      `/books/${bookId}/comments`
    );
  },
  postBookComment: (bookId, userId, comment) => {
    return api.post(
      `/books/${bookId}/comments`,
      {comment:{book_id: bookId, user_id: userId, content: comment}}
    );
  },
  getBookSuggestions: (bookId) => {
    return api.get(
      `/books/${bookId}/suggestions`
    );
  },
  postBookSuggestion: (title, author, link) => {
    return api.post(
      '/book_suggestions',
      {book_suggestion:{title, author, link}}
    );
  }
};
