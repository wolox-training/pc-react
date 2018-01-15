import {getBooksService, getBookService, getBookRentsService, getBookCommentaries, postBookComment, getBookSuggestions, postBookSuggestion} from '../../services/books';
import UsersService from '../../services/users';

import bookDetailStates from '../../constants/bookDetailStates';

export const ActionTypes = {
  GET_BOOKS: 'GET_BOOKS',
  GET_BOOK: 'GET_BOOK',
  GET_BOOK_COMMENTARIES: 'GET_BOOK_COMMENTARIES',
  BOOK_LOADING: 'BOOK_LOADING',
  AT_WISHLIST: 'AT_WISHLIST',
  SET_BOOK_FILTER_TYPE: 'SET_BOOK_FILTER_TYPE',
  SET_BOOK_FILTER_TEXT: 'SET_BOOK_FILTER_TEXT',
  NEW_COMMENT_SUCCESS: 'NEW_COMMENT_SUCCESS',
  NEW_COMMENT_FAILURE: 'NEW_COMMENT_FAILURE',
  GET_BOOK_SUGGESTIONS_SUCCESS: 'GET_BOOK_SUGGESTIONS_SUCCESS',
  GET_BOOK_SUGGESTIONS_FAILURE: 'GET_BOOK_SUGGESTIONS_FAILURE',
  POST_BOOK_SUGGESTION_SUCCESS: 'CLOSE_SUGGESTION_MODAL',
  POST_BOOK_SUGGESTION_FAILURE: 'POST_BOOK_SUGGESTION_FAILURE',
  CLOSE_SUGGESTION_MODAL: 'CLOSE_SUGGESTION_MODAL',
  OPEN_SUGGESTION_MODAL: 'OPEN_SUGGESTION_MODAL',
};

export const getBooks = () => {
  return (dispatch) => {
    getBooksService().then(
      response => response.ok && dispatch({type: ActionTypes.GET_BOOKS, books: response.data})
    );
  };
};


export const getBook = (id) => {

  return async (dispatch) => {
    dispatch({type: ActionTypes.BOOK_LOADING});
    const responseBook = await getBookService(id);
    if(responseBook.ok){
      const responseRents = await getBookRentsService(id);
      const rentData = responseRents.data.some(rent => rent.user.email === sessionStorage.getItem('user_session'));
      if(rentData){
        dispatch({type: ActionTypes.GET_BOOK, currentBook: responseBook.data, bookState: bookDetailStates.RENTED_BY_CONNECTED, buttonDisabled: true, returnBefore: rentData.to});
      }else{
        if(responseRents.data.some(rent => rent.returned_at)){
          dispatch({type: ActionTypes.GET_BOOK, currentBook: responseBook.data, bookState: bookDetailStates.NOT_RENTED, buttonDisabled: false, returnBefore: false});
        }else{
          const responseData = await UsersService.getConnectedUser();
          if(responseData.ok){
            const responseWish = await UsersService.getBookWishesService(responseData.data.id);
            if(responseWish.ok && responseWish.data.find(wish => wish.book.id === responseBook.data.id)){
              dispatch({type: ActionTypes.GET_BOOK, currentBook: responseBook.data, bookState: bookDetailStates.AT_WISHLIST, buttonDisabled: true, returnBefore: false});
            }else {
              dispatch({type: ActionTypes.GET_BOOK, currentBook: responseBook.data, bookState: bookDetailStates.RENTED_NOT_AT_WISHLIST, buttonDisabled: false, returnBefore: false});
            }
          }
        }
      }
    }else{

    }
  };
};

export const addToWishlist = (bookId) => {
  return async (dispatch) => {
    dispatch({type: ActionTypes.BOOK_LOADING});
    const responseData = await UsersService.getConnectedUser();
    if(responseData.ok){
      const responsePost = await UsersService.postWishlist(bookId, responseData.data.id);
      if(responsePost.ok){
        dispatch({type: ActionTypes.AT_WISHLIST});
      }
    }
  }
}

export const getCommentaries = (bookId) => {
  return async (dispatch) => {
    dispatch({type: ActionTypes.BOOK_LOADING});
    const responseCommentaries = await getBookCommentaries(bookId);
    if(responseCommentaries.ok){
      dispatch({type: ActionTypes.GET_BOOK_COMMENTARIES, commentaries: responseCommentaries.data});
    }else{
      dispatch({type: ActionTypes.GET_BOOK_COMMENTARIES, commentaries: null});
    }
  }
}

export const postComment = (bookId, comment) => {
  return async (dispatch) => {
    dispatch({type: ActionTypes.BOOK_LOADING});
    const responseData = await UsersService.getConnectedUser();
    if(responseData.ok){
      const responsePost = await postBookComment(bookId, responseData.data.id, comment);
      if(responsePost.ok){
        getCommentaries(bookId)(dispatch)
      }
    }
  }
}

export const setBookFilterType = (filterType) => {
  return {
    type: ActionTypes.SET_BOOK_FILTER_TYPE,
    filterType
  };
};

export const setBookFilterText = (filterText) => {
  return {
    type: ActionTypes.SET_BOOK_FILTER_TEXT,
    filterText
  };
};

export const getSuggestions = (bookId) => {
  return async (dispatch) => {
    dispatch({type: ActionTypes.BOOK_LOADING});
    const responseSuggestions = await getBookSuggestions(bookId);
    if(responseSuggestions.ok){
      dispatch({type: ActionTypes.GET_BOOK_SUGGESTIONS_SUCCESS, payload: {currentBookSuggestion: responseSuggestions.data}});
    }else{
      dispatch({type: ActionTypes.GET_BOOK_SUGGESTIONS_FAILURE});
    }
  }
}

export const postSuggestion = (title, author, link) => {
  return async (dispatch) => {
    dispatch({type: ActionTypes.BOOK_LOADING});
    const responsePost = await postBookSuggestion(title, author, link);
    if(responsePost.ok){
      dispatch({type: ActionTypes.POST_BOOK_SUGGESTION_SUCCESS});
    }else{
      dispatch({type: ActionTypes.POST_BOOK_SUGGESTION_FAILURE});
    }
  }
}

export const openSuggestionModal = () => {
  return {
    type: ActionTypes.OPEN_SUGGESTION_MODAL
  };
};

export const closeSuggestionModal = () => {
  return {
    type: ActionTypes.CLOSE_SUGGESTION_MODAL
  };
};
