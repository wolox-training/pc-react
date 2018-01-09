import { actionTypes } from './actions';

const initialState = {
  filterType: '',
  filterText: '',
  books: [],
  currentBook: {}
};

function reducer(state = initialState, action) {
  switch (action.type) {
  case actionTypes.SET_BOOK_FILTER_TYPE:
    return {
      ...state,
      filterType: action.payload.filterType
    };
  case actionTypes.SET_BOOK_FILTER_TEXT:
    return {
      ...state,
      filterText: action.payload.filterText
    };
  case actionTypes.GET_BOOK_SUCCESS:
    return {
      ...state,
      currentBook: {...state.books.filter(x => x.id === Number(action.payload.currentBook.id))[0], ...action.payload.currentBook}
    };
  case actionTypes.GET_BOOKS_SUCCESS:
    return {
      ...state,
      books: action.payload.books
    };
  default:
    return state;
  }
}

export default reducer;
