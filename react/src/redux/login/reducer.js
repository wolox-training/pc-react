import { actionTypes } from './actions';
import strings from '../../screens/SignUp/strings';

const initialState = {
  authorization: '',
  user_session: null,
  signupState: {
    buttonText: strings.send,
    posting: false,
    error: '',
  },
  loginState: {
    buttonText: strings.send,
    posting: false,
    error: '',
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {
  case actionTypes.SIGN_UP_LOADING:
    return {
      ...state,
      signupState: {
        ...state.signupState,
        posting: true,
        buttonText: strings.sending,
        error: ''
      }
    };
  case actionTypes.SIGN_UP_SUCCESS:
    return {
      ...state,
      user_session: action.payload.email,
      authorization: action.payload.access_token,
      signupState: {
        ...state.signupState,
        posting: false,
        buttonText: strings.send,
      }
    };
  case actionTypes.SIGN_UP_FAILURE:
    return {
      ...state,
      signupState: {
        ...state.signupState,
        posting: false,
        error: action.payload.error,
        buttonText: strings.send,
      }
    };
  case actionTypes.LOG_IN_LOADING:
    return {
      ...state,
      loginState: {
        ...state.loginState,
        posting: true,
        buttonText: strings.sending,
        error: ''
      }
    };
  case actionTypes.LOG_IN_SUCCESS:
    return {
      ...state,
      user_session: action.payload.email,
      authorization: action.payload.access_token,
      loginState: {
        ...state.loginState,
        posting: false,
        buttonText: strings.send,
      }
    };
  case actionTypes.LOG_IN_FAILURE:
    return {
      ...state,
      loginState: {
        ...state.loginState,
        posting: false,
        error: action.payload.error,
        buttonText: strings.send,
      }
    };
  case actionTypes.LOG_OUT:
    return {
      ...state,
      user_session: null,
      authorization: ''
    };
  default:
    return state;
  }
}

export default reducer;
