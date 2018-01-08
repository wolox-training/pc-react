import { ActionTypes } from './actions';

const initialState = {
  filters: {
    type: '',
    text: ''
  },
  books: [],
  currentBook: {}
};

function books(state = initialState, action) {
  switch (action.type) {
  case ActionTypes.SET_BOOK_FILTER_TYPE:
    return {
      ...state,
      filters: {
        ...state.filters,
        type: action.filterType
      }
    };
  case ActionTypes.SET_BOOK_FILTER_TEXT:
    return {
      ...state,
      filters: {
        ...state.filters,
        text: action.filterText
      }
    };
  case ActionTypes.GET_BOOK:

    return {
      ...state,
      currentBook: {...state.books.filter(x => x.id === Number(action.currentBook.id))[0], ...action.currentBook}
    };
  case ActionTypes.GET_BOOKS:
    return {
      ...state,
      books: action.books
    };
  default:
    return state;
  }
}

export default books;
