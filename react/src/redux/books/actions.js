import {getBooksService, getBookService} from '../../services/books';

export const actionTypes = {
  GET_BOOK_SUCCESS: 'GET_BOOK_SUCCESS',
  GET_BOOK_FAILURE: 'GET_BOOK_FAILURE',
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: 'GET_BOOKS_FAILURE',
  SET_BOOK_FILTER_TYPE: 'SET_BOOK_FILTER_TYPE',
  SET_BOOK_FILTER_TEXT: 'SET_BOOK_FILTER_TEXT',
};

const actionCreators = {
  getBooks: () => {
    return async (dispatch) => {
      const response = await getBooksService();
      if(response.ok){
        dispatch({type: actionTypes.GET_BOOKS_SUCCESS, payload:{books: response.data}})
      }else{
        dispatch({type: actionTypes.GET_BOOKS_FAILURE})
      }
    };
  },
  getBook: (id) => {
    return async (dispatch) => {
      const response = await getBookService(id);
      if(response.ok){
        dispatch({type: actionTypes.GET_BOOK_SUCCESS, payload:{currentBook: response.data}})
      }else{
        dispatch({type: actionTypes.GET_BOOK_FAILURE})
      }
    };
  },
  setBookFilterType: (filterType) => {
    return {
      type: actionTypes.SET_BOOK_FILTER_TYPE,
      payload: {filterType}
    };
  },
  setBookFilterText: (filterText) => {
    return {
      type: actionTypes.SET_BOOK_FILTER_TEXT,
      payload: {filterText}
    };
  }
};

export default actionCreators;
