import api from '../config/service';

export const getBooksService = () => {
  return api.get(
    '/books'
  );
};

export const getBookService = (bookId) => {

  return api.get(
    `/books/${bookId}`
  );
};

export const getBookRentsService = (bookId) => {

  return api.get(
    `/books/${bookId}/rents`
  );
};

export const getBookWishesService = (userId) => {

  return api.get(
    `/users/${userId}/wishes`
  );
};

export const getUserData = () => {
  return api.get('/users/me');
};

export const getBookCommentaries = (bookId) => {
  return api.get(
    `/books/${bookId}/comments`
  );
};

export const postWishlist = (bookId, userId) => {
  return api.post(
    `/users/${userId}/wishes`,
    {wish:{book_id: bookId, user_id: userId}}
  );
};

export const postBookComment = (bookId, userId, comment) => {
  return api.post(
    `/books/${bookId}/comments`,
    {comment:{book_id: bookId, user_id: userId, content: comment}}
  );
};
