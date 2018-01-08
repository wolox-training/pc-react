import {getBooksService, getBookService} from '../../services/books';

export const ActionTypes = {
  GET_BOOKS: 'GET_BOOKS',
  GET_BOOK: 'GET_BOOK',
  SET_BOOK_FILTER_TYPE: 'SET_BOOK_FILTER_TYPE',
  SET_BOOK_FILTER_TEXT: 'SET_BOOK_FILTER_TEXT',
};

export const getBooks = () => {
  return (dispatch) => {
    getBooksService().then(
      response => response.ok && dispatch({type: ActionTypes.GET_BOOKS, books: response.data})
    );
  };
};

export const getBook = (id) => {
  return (dispatch) => {
    getBookService(id).then(
      response => response.ok && dispatch({type: ActionTypes.GET_BOOK, currentBook: response.data})
    );
  };
};

export const setBookFilterType = (filterType) => {
  return {
    type: ActionTypes.SET_BOOK_FILTER_TYPE,
    filterType
  };
};

export const setBookFilterText = (filterText) => {
  return {
    type: ActionTypes.SET_BOOK_FILTER_TEXT,
    filterText
  };
};
