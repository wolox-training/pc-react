import { actionTypes } from './actions';

const initialState = {
  user: {}
};

function reducer(state = initialState, action) {
  switch (action.type) {
  case actionTypes.GET_USER_SUCCESS:
    return {
      user: action.payload.user
    };
  default:
    return state;
  }
}

export default reducer;
