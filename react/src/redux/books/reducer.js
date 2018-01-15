import { ActionTypes } from './actions';
import bookDetailStates from '../../constants/bookDetailStates';

const initialState = {
  filters: {
    type: '',
    text: ''
  },
  detail_state: {
    bookState: '',
    buttonDisabled: false,
    returnBefore: false,
  },
  books: [],
  currentBook: {},
  currentBookCommentaries: [],
  currentBookSuggestion: [],
  suggestionModalIsOpen: false,
  loading: false
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
  case ActionTypes.BOOK_LOADING:

    return {
      ...state,
      loading: true
    };
  case ActionTypes.GET_BOOK:

    return {
      ...state,
      detail_state: {
        ...state.detail_state,
        bookState: action.bookState,
        buttonDisabled: action.buttonDisabled,
        returnBefore: action.returnBefore
      },
      currentBook: {...state.books.filter(x => x.id === Number(action.currentBook.id))[0], ...action.currentBook},
      loading: false
    };
  case ActionTypes.GET_BOOKS:
    return {
      ...state,
      books: action.books
    };
  case ActionTypes.GET_BOOK_COMMENTARIES:
    return {
      ...state,
      currentBookCommentaries: action.commentaries,
      loading: false
    };
  case ActionTypes.AT_WISHLIST:
    return {
      ...state,
      detail_state: {
        ...state.detail_state,
        bookState: bookDetailStates.AT_WISHLIST,
        buttonDisabled: true
      },
      loading: false
    };
  case ActionTypes.NEW_COMMENT_SUCCESS:
    return {
      ...state,
      currentBookCommentaries: action.payload.commentaries,
      loading: false
    };
  case ActionTypes.GET_BOOK_SUGGESTIONS_SUCCESS:
    return {
      ...state,
      currentBookSuggestion: action.payload.currentBookSuggestion,
      loading: false
    };
  case ActionTypes.CLOSE_SUGGESTION_MODAL:
    return {
      ...state,
      suggestionModalIsOpen: false,
      loading: false
    };
  case ActionTypes.OPEN_SUGGESTION_MODAL:
    return {
      ...state,
      suggestionModalIsOpen: true,
      loading: false
    };
  default:
    return state;
  }
}

export default books;
