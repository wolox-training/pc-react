import {postSignUp, postLogin} from '../../services/auth';
import api from '../../config/service'

export const actionTypes = {
  LOG_IN_LOADING: 'LOG_IN_LOADING',
  LOG_IN_SUCCESS: 'LOG_IN_SUCCESS',
  LOG_IN_FAILURE: 'LOG_IN_FAILURE',
  LOG_OUT: 'LOG_OUT',
  SIGN_UP_LOADING: 'SIGN_UP_LOADING',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE: 'SIGN_UP_FAILURE',
};

const setSession = (email, access_token) => {
  sessionStorage.setItem('user_session', email);
  sessionStorage.setItem('Authorization', access_token);
  api.setHeader('Authorization', access_token);
};

const actionCreators = {
  logIn: (email, password) => {
    return async (dispatch) => {
      dispatch({type: actionTypes.LOG_IN_LOADING});
      const response = await postLogin(email, password);
      if(response.ok){
        setSession(email, response.data.access_token);
        dispatch({type: actionTypes.LOG_IN_SUCCESS, payload:{email, access_token: response.data.access_token}})
      }else{
        dispatch({type: actionTypes.LOG_IN_FAILURE, payload:{error: response.data.error}})
      }
    };
  },
  logOut: () => {
    return {
      type: actionTypes.LOG_OUT,
    };
  },
  signUp: (email, password, confirmPassword, name, surname) => {
    return async (dispatch) => {
      dispatch({type: actionTypes.SIGN_UP_LOADING});
      const response = await postSignUp(email, password, confirmPassword, name, surname);
      if(response.ok){
        setSession(email, response.data.access_token);
        dispatch({type: actionTypes.SIGN_UP_SUCCESS, payload:{email, access_token: response.data.access_token}})
      }else{
        dispatch({type: actionTypes.SIGN_UP_FAILURE, payload:{error: response.data.error[0]}})
      }
    };
  }
}

export default actionCreators;
