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

export const getBookCommentaries = (bookId) => {
  return api.get(
    `/books/${bookId}/comments`
  );
};

export const postBookComment = (bookId, userId, comment) => {
  return api.post(
    `/books/${bookId}/comments`,
    {comment:{book_id: bookId, user_id: userId, content: comment}}
  );
};

export const getBookSuggestions = (bookId) => {
  return api.get(
    `/books/${bookId}/suggestions`
  );
};

export const postBookSuggestion = (title, author, link) => {
  return api.post(
    '/book_suggestions',
    {book_suggestion:{title, author, link}}
  );
};
