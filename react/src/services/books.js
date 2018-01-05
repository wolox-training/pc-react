import api from '../config/service';

export const getBooks = () => {
  return api.get(
    '/books'
  );
};

export const getBook = (bookId) => {

  return api.get(
    `/books/${bookId}`
  );
};
