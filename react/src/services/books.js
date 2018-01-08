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
