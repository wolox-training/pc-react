import { actionTypes } from './actions';

const initialState = {
  profileState: {
    user: {},
    readBooks: [],
    wishBooks: [],
    comments: [],
  },
  notifications: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
  case actionTypes.GET_USER_SUCCESS:
    return {
      ...state,
      profileState: {
        ...state.profileState,
        user: action.payload.user
      }
    };
  case actionTypes.GET_PROFILE_BOOKS_SUCCESS:
    return {
      ...state,
      profileState: {
        ...state.profileState,
        readBooks: action.payload.readBooks,
        wishBooks: action.payload.wishBooks
      }
    };
  case actionTypes.GET_PROFILE_BOOK_COMMENTS_SUCCESS:
    return {
      ...state,
      profileState: {
        ...state.profileState,
        comments: action.payload.comments,
      }
    };
  case actionTypes.GET_NOTIFICATIONS_SUCCESS:
    return {
      ...state,
      notifications: action.payload.notifications
    };
  default:
    return state;
  }
}

export default reducer;
