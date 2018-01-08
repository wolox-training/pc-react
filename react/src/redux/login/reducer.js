import { ActionTypes } from './actions';
import strings from '../../screens/SignUp/strings';

const initialState = {
  authorization: '',
  user_session: null,
  signup_state: {
    buttonText: strings.send,
    posting: false,
    error: '',
  },
  login_state: {
    buttonText: strings.send,
    posting: false,
    error: '',
  }
};

function login(state = initialState, action) {
  switch (action.type) {
  case ActionTypes.SIGN_UP_LOADING:
    return {
      ...state,
      signup_state: {
        ...state.signup_state,
        posting: true,
        buttonText: strings.sending,
        error: ''
      }
    };
  case ActionTypes.SIGN_UP_SUCCESS:
    return {
      ...state,
      user_session: action.email,
      authorization: action.access_token,
      signup_state: {
        ...state.signup_state,
        posting: false,
        buttonText: strings.send,
      }
    };
  case ActionTypes.SIGN_UP_FAILURE:
    return {
      ...state,
      signup_state: {
        ...state.signup_state,
        posting: false,
        error: action.error,
        buttonText: strings.send,
      }
    };
  case ActionTypes.LOG_IN_LOADING:
    return {
      ...state,
      login_state: {
        ...state.login_state,
        posting: true,
        buttonText: strings.sending,
        error: ''
      }
    };
  case ActionTypes.LOG_IN_SUCCESS:
    return {
      ...state,
      user_session: action.email,
      authorization: action.access_token,
      login_state: {
        ...state.login_state,
        posting: false,
        buttonText: strings.send,
      }
    };
  case ActionTypes.LOG_IN_FAILURE:
    return {
      ...state,
      login_state: {
        ...state.login_state,
        posting: false,
        error: action.error,
        buttonText: strings.send,
      }
    };
  case ActionTypes.LOG_OUT:
    return {
      ...state,
      user_session: null,
      authorization: ''
    };
  default:
    return state;
  }
}

export default login;
