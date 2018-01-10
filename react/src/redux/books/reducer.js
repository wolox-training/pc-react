import { actionTypes } from './actions';
import bookDetailStates from '../../constants/bookDetailStates';

const initialState = {
  filterType: '',
  filterText: '',
  detail_state: {
    bookState: '',
    buttonDisabled: false,
    returnBefore: false,
  },
  books: [],
  currentBook: {},
  loading: false
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
  case actionTypes.GET_BOOK_LOADING:

    return {
      ...state,
      loading: true
    };
  case actionTypes.GET_BOOK_SUCCESS:
    return {
      ...state,
      detail_state: {
        ...state.detail_state,
        bookState: action.payload.bookState,
        buttonDisabled: action.payload.buttonDisabled,
        returnBefore: action.payload.returnBefore
      },
      currentBook: {...state.books.filter(x => x.id === Number(action.payload.currentBook.id))[0], ...action.payload.currentBook},
      loading: false

    };
  case actionTypes.GET_BOOKS_SUCCESS:
    return {
      ...state,
      books: action.payload.books
    };
  case actionTypes.AT_WISHLIST:
    return {
      ...state,
      detail_state: {
        ...state.detail_state,
        bookState: bookDetailStates.AT_WISHLIST,
        buttonDisabled: true
      },
      loading: false
    };
  default:
    return state;
  }
}

export default reducer;
