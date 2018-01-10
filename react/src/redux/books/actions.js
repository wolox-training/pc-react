import {getBooksService, getBookService, getBookRentsService, getBookWishesService, getUserData, postWishlist} from '../../services/books';
import bookDetailStates from '../../constants/bookDetailStates';


export const actionTypes = {
  GET_BOOK_SUCCESS: 'GET_BOOK_SUCCESS',
  GET_BOOK_FAILURE: 'GET_BOOK_FAILURE',
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: 'GET_BOOKS_FAILURE',
  GET_BOOK_LOADING: 'GET_BOOK_LOADING',
  AT_WISHLIST: 'AT_WISHLIST',
  SET_BOOK_FILTER_TYPE: 'SET_BOOK_FILTER_TYPE',
  SET_BOOK_FILTER_TEXT: 'SET_BOOK_FILTER_TEXT',
};

const actionCreators = {
  getBooks: () => {
    return async (dispatch) => {
      const response = await getBooksService();
      if(response.ok){
        dispatch({type: actionTypes.GET_BOOKS_SUCCESS, payload:{books: response.data}})
      }else{
        dispatch({type: actionTypes.GET_BOOKS_FAILURE})
      }
    };
  },
  getBook: (id) => {
    return async (dispatch) => {
      dispatch({type: actionTypes.GET_BOOK_LOADING});
      const responseBook = await getBookService(id);
      if(responseBook.ok){
        const responseRents = await getBookRentsService(id);
        if(responseRents.ok){
          const rentData = responseRents.data.some(rent => rent.user.email === sessionStorage.getItem('user_session'));
          if(rentData){
            dispatch({
              type: actionTypes.GET_BOOK_SUCCESS,
              payload: {
                currentBook: responseBook.data,
                bookState: bookDetailStates.RENTED_BY_CONNECTED,
                buttonDisabled: true,
                returnBefore: rentData.to
              }
            });
          }else{
            if(responseRents.data.some(rent => rent.returned_at)){
              dispatch({
                type: actionTypes.GET_BOOK_SUCCESS,
                payload: {
                  currentBook: responseBook.data,
                  bookState: bookDetailStates.NOT_RENTED,
                  buttonDisabled: false,
                  returnBefore: false
                }
              });
            }else{
              const responseData = await getUserData();
              if(responseData.ok){
                const responseWish = await getBookWishesService(responseData.data.id);
                if(responseWish.ok && responseWish.data.some(data => data.book.id === responseBook.data.id)){
                  dispatch({
                    type: actionTypes.GET_BOOK_SUCCESS,
                    payload: {
                      currentBook: responseBook.data,
                      bookState: bookDetailStates.AT_WISHLIST,
                      buttonDisabled: true,
                      returnBefore: false
                    }
                  });
                }else {
                  dispatch({
                    type: actionTypes.GET_BOOK_SUCCESS,
                    payload: {
                      currentBook: responseBook.data,
                      bookState: bookDetailStates.RENTED_NOT_AT_WISHLIST,
                      buttonDisabled: false,
                      returnBefore: false
                    }
                  });
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
      dispatch({type: actionTypes.GET_BOOK_LOADING});
      const responseData = await getUserData();
      if(responseData.ok){
        const responsePost = await postWishlist(bookId, responseData.data.id);
        if(responsePost.ok){
          dispatch({type: actionTypes.AT_WISHLIST});
        }
      }
    }
  }
};

export default actionCreators;
