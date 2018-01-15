import {postSignUp, postLogin} from '../../services/auth';
import api from '../../config/service'

export const ActionTypes = {
  LOG_IN_LOADING: 'LOG_IN_LOADING',
  LOG_IN_SUCCESS: 'LOG_IN_SUCCESS',
  LOG_IN_FAILURE: 'LOG_IN_FAILURE',
  LOG_OUT: 'LOG_OUT',
  SIGN_UP_LOADING: 'SIGN_UP_LOADING',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE: 'SIGN_UP_FAILURE',
};

export const logIn = (email, password) => {

  return async (dispatch) => {
    dispatch({type: ActionTypes.LOG_IN_LOADING});
    const response = await postLogin(email, password);
    if(response.ok){
      sessionStorage.setItem('user_session', email);
      sessionStorage.setItem('Authorization', response.data.access_token);
      api.setHeader('Authorization', response.data.access_token);
      dispatch({type: ActionTypes.LOG_IN_SUCCESS, email, access_token: response.data.access_token})
    }else{
      dispatch({type: ActionTypes.LOG_IN_FAILURE, error: response.error})
    }
  };
};

export const logOut = () => {
  sessionStorage.clear();
  return {
    type: ActionTypes.LOG_OUT,
  };
};

export const signUp = (email, password, confirmPassword, name, surname) => {

  return async (dispatch) => {
    dispatch({type: ActionTypes.SIGN_UP_LOADING});
    const response = await postSignUp(email, password, confirmPassword, name, surname);
    if(response.ok){
      sessionStorage.setItem('user_session', email);
      sessionStorage.setItem('Authorization', response.data.access_token);
      api.setHeader('Authorization', response.data.access_token);
      dispatch({type: ActionTypes.SIGN_UP_SUCCESS, email, access_token: response.data.access_token})
    }else{
      dispatch({type: ActionTypes.SIGN_UP_FAILURE, error: response.data.error[0]})
    }
  };
};
