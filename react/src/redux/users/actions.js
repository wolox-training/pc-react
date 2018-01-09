import {getConnectedUser} from '../../services/users';

export const actionTypes = {
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_FAILURE: 'GET_USER_FAILURE'
};

const actionCreators = {
  getUser: () => {
    return async (dispatch) => {
      const responseUser = await getConnectedUser();
      if(responseUser.ok){
        dispatch({type: actionTypes.GET_USER_SUCCESS, payload: {user: responseUser.data}});
      }else{
        dispatch({type: actionTypes.GET_USER_FAILURE});
      }
    }
  }
};

export default actionCreators;
