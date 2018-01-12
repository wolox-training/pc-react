import BookService from '../../services/books';
import bookDetailStates from '../../constants/bookDetailStates';

export const actionTypes = {
  GET_BOOK_SUCCESS: 'GET_BOOK_SUCCESS',
  GET_BOOK_FAILURE: 'GET_BOOK_FAILURE',
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: 'GET_BOOKS_FAILURE',
  BOOK_LOADING: 'BOOK_LOADING',
  SET_BOOK_STATE: 'SET_BOOK_STATE',
  AT_WISHLIST: 'AT_WISHLIST',
  SET_BOOK_FILTER_TYPE: 'SET_BOOK_FILTER_TYPE',
  SET_BOOK_FILTER_TEXT: 'SET_BOOK_FILTER_TEXT',
  GET_BOOK_COMMENTARIES: 'GET_BOOK_COMMENTARIES',
  NEW_COMMENT_SUCCESS: 'NEW_COMMENT_SUCCESS',
  NEW_COMMENT_FAILURE: 'NEW_COMMENT_FAILURE',
  GET_BOOK_SUGGESTIONS_SUCCESS: 'GET_BOOK_SUGGESTIONS_SUCCESS',
  GET_BOOK_SUGGESTIONS_FAILURE: 'GET_BOOK_SUGGESTIONS_FAILURE'
};

const privateActionCreators = {
  getBookSuccess: (currentBook, bookState, buttonDisabled, returnBefore) => dispatch => {
    dispatch({type: actionTypes.GET_BOOK_SUCCESS, payload: {currentBook}});
    dispatch({type: actionTypes.SET_BOOK_STATE, payload: {bookState, buttonDisabled, returnBefore}});
  }
}

const actionCreators = {
  getBooks: () => {
    return async (dispatch) => {
      const response = await BookService.getBooksService();
      if(response.ok){
        dispatch({type: actionTypes.GET_BOOKS_SUCCESS, payload:{books: response.data}})
      }else{
        dispatch({type: actionTypes.GET_BOOKS_FAILURE})
      }
    };
  },
  getBook: (id) => {
    return async (dispatch) => {
      dispatch({type: actionTypes.BOOK_LOADING});
      const responseBook = await BookService.getBookService(id);
      if(responseBook.ok){
        const responseRents = await BookService.getBookRentsService(id);
        if(responseRents.ok){
          const rentData = responseRents.data.some(rent => rent.user.email === sessionStorage.getItem('user_session'));
          if(rentData){
            dispatch(privateActionCreators.getBookSuccess(responseBook.data,bookDetailStates.RENTED_BY_CONNECTED,true,rentData.to));
          }else{
            if(responseRents.data.some(rent => rent.returned_at)){
              dispatch(privateActionCreators.getBookSuccess(responseBook.data,bookDetailStates.NOT_RENTED,false,null));
            }else{
              const responseData = await BookService.getUserData();
              if(responseData.ok){
                const responseWish = await BookService.getBookWishesService(responseData.data.id);
                if(responseWish.ok && responseWish.data.some(data => data.book.id === responseBook.data.id)){
                  dispatch(privateActionCreators.getBookSuccess(responseBook.data,bookDetailStates.AT_WISHLIST,true,null));
                }else {
                  dispatch(privateActionCreators.getBookSuccess(responseBook.data,bookDetailStates.RENTED_NOT_AT_WISHLIST,false,null));
                }
              }else{
                dispatch({type: actionTypes.GET_BOOK_FAILURE})
              }
            }
          }
        }else{
          dispatch({type: actionTypes.GET_BOOK_FAILURE})
        }
      }else{
        dispatch({type: actionTypes.GET_BOOK_FAILURE})
      }
    };
  },
  setBookFilterType: (filterType) => {
    return {
      type: actionTypes.SET_BOOK_FILTER_TYPE,
      payload: {filterType}
    };
  },
  setBookFilterText: (filterText) => {
    return {
      type: actionTypes.SET_BOOK_FILTER_TEXT,
      payload: {filterText}
    };
  },
  addToWishlist: (bookId) => {
    return async (dispatch) => {
      dispatch({type: actionTypes.BOOK_LOADING});
      const responseData = await BookService.getUserData();
      if(responseData.ok){
        const responsePost = await BookService.postWishlist(bookId, responseData.data.id);
        if(responsePost.ok){
          dispatch({type: actionTypes.AT_WISHLIST});
        }
      }
    }
  },
  getCommentaries: (bookId) => {
    return async (dispatch) => {
      dispatch({type: actionTypes.BOOK_LOADING});
      const responseCommentaries = await BookService.getBookCommentaries(bookId);
        dispatch({type: actionTypes.GET_BOOK_COMMENTARIES, payload: {commentaries: (responseCommentaries.ok && responseCommentaries.data) || null}});
    }
  },
  postComment: (bookId, comment) => {
    return async (dispatch) => {
      dispatch({type: actionTypes.BOOK_LOADING});
      const responseData = await BookService.getUserData();
      if(responseData.ok){
        const responsePost = await BookService.postBookComment(bookId, responseData.data.id, comment);
        if(responsePost.ok){
          dispatch(actionCreators.getCommentaries(bookId))
        }
      }
    }
  },
  getSuggestions: (bookId) => {
    return async (dispatch) => {
      dispatch({type: actionTypes.BOOK_LOADING});
      const responseSuggestions = await BookService.getBookSuggestions(bookId);
      if(responseSuggestions.ok){
        dispatch({type: actionTypes.GET_BOOK_SUGGESTIONS_SUCCESS, payload: {currentBookSuggestion: responseSuggestions.data}});
      }else{
        dispatch({type: actionTypes.GET_BOOK_SUGGESTIONS_FAILURE});
      }
    }
  }
};

export default actionCreators;
