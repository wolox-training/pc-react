import UsersService from '../../services/users';

export const actionTypes = {
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_FAILURE: 'GET_USER_FAILURE',
  GET_PROFILE_BOOKS_SUCCESS: 'GET_PROFILE_BOOKS_SUCCESS',
  GET_PROFILE_BOOKS_FAILURE: 'GET_PROFILE_BOOKS_FAILURE',
  GET_PROFILE_BOOK_COMMENTS_SUCCESS: 'GET_PROFILE_BOOK_COMMENTS_SUCCESS',
  GET_PROFILE_BOOK_COMMENTS_FAILURE: 'GET_PROFILE_BOOK_COMMENTS_FAILURE',
  GET_NOTIFICATIONS_SUCCESS: 'GET_NOTIFICATIONS_SUCCESS',
  GET_NOTIFICATIONS_FAILURE: 'GET_NOTIFICATIONS_FAILURE'
};

const MAX_IMAGES_PROFILE = 4;

const actionCreators = {
  getUser: () => {
    return async (dispatch) => {
      const responseUser = await UsersService.getConnectedUser();
      if(responseUser.ok){
        dispatch({type: actionTypes.GET_USER_SUCCESS, payload: {user: responseUser.data}});
      }else{
        dispatch({type: actionTypes.GET_USER_FAILURE});
      }
    }
  },
  getProfileBooks: () => {
    return async (dispatch) => {
      const responseData = await UsersService.getConnectedUser();
      if(responseData.ok){
        const responseRead = await UsersService.getReadBooks(responseData.data.id);
        const responseWish = await UsersService.getBookWishesService(responseData.data.id);
        if(responseRead.ok && responseWish.ok){
          dispatch({type: actionTypes.GET_PROFILE_BOOKS_SUCCESS, payload: {readBooks: responseRead.data.slice(0, MAX_IMAGES_PROFILE), wishBooks: responseWish.data.slice(0, MAX_IMAGES_PROFILE).map(a => a.book)}});
        }else{
          dispatch({type: actionTypes.GET_PROFILE_BOOKS_FAILURE});
        }
      }else{
        dispatch({type: actionTypes.GET_PROFILE_BOOKS_FAILURE});
      }
    }
  },
  getProfileBookComments: () => {
    return async (dispatch) => {
      const responseData = await UsersService.getConnectedUser();
      if(responseData.ok){
        const responseComments = await UsersService.getBookComments(responseData.data.id);
        if(responseComments.ok){
          dispatch({type: actionTypes.GET_PROFILE_BOOK_COMMENTS_SUCCESS, payload: {comments: responseComments.data}});
        }else{
          dispatch({type: actionTypes.GET_PROFILE_BOOK_COMMENTS_FAILURE});
        }
      }else{
        dispatch({type: actionTypes.GET_PROFILE_BOOK_COMMENTS_FAILURE});
      }
    }
  },
  getNotifications: (userId) => {
    return async (dispatch) => {
      const responseNotifications = await UsersService.getNotifications(userId);
      if(responseNotifications.ok){
        dispatch({type: actionTypes.GET_NOTIFICATIONS_SUCCESS, payload: {notifications: responseNotifications.data}});
      }else{
        dispatch({type: actionTypes.GET_NOTIFICATIONS_FAILURE});
      }
    }
  },
  // postReadNotification: (userId, notificationId) => {
  //   return async (dispatch) => {
  //     const responseNotifications = await UsersService.getNotifications(userId);
  //     if(responseNotifications.ok){
  //       dispatch({type: actionTypes.POST_NOTIFICATION_SUCCESS});
  //     }else{
  //       dispatch({type: actionTypes.POST_NOTIFICATION_FAILURE});
  //     }
  //   }
  // }
};

export default actionCreators;
