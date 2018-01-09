import {getBooksService, getBookService, getBookRentsService, getBookWishesService, getUserData, postWishlist} from '../../services/books';
import bookDetailStates from '../../constants/bookDetailStates';

export const ActionTypes = {
  GET_BOOKS: 'GET_BOOKS',
  GET_BOOK: 'GET_BOOK',
  GET_BOOK_LOADING: 'GET_BOOK_LOADING',
  AT_WISHLIST: 'AT_WISHLIST',
  SET_BOOK_FILTER_TYPE: 'SET_BOOK_FILTER_TYPE',
  SET_BOOK_FILTER_TEXT: 'SET_BOOK_FILTER_TEXT',
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
    dispatch({type: ActionTypes.GET_BOOK_LOADING});
    const responseBook = await getBookService(id);
    console.log(responseBook)
    if(responseBook.ok){
      const responseRents = await getBookRentsService(id);
      console.log(responseRents);
      const rentData = responseRents.data.some(rent => rent.user.email === sessionStorage.getItem('user_session'));
      if(rentData){
        console.log(bookDetailStates.RENTED_BY_CONNECTED)
        dispatch({type: ActionTypes.GET_BOOK, currentBook: responseBook.data, bookState: bookDetailStates.RENTED_BY_CONNECTED, buttonDisabled: true, returnBefore: rentData.to});
      }else{
        if(responseRents.data.some(rent => rent.returned_at)){
          console.log(bookDetailStates.NOT_RENTED)
          dispatch({type: ActionTypes.GET_BOOK, currentBook: responseBook.data, bookState: bookDetailStates.NOT_RENTED, buttonDisabled: false, returnBefore: false});
        }else{
          const responseData = await getUserData();
          if(responseData.ok){
            const responseWish = await getBookWishesService(responseData.data.id);
            if(responseWish.ok){
              console.log(bookDetailStates.AT_WISHLIST)
              dispatch({type: ActionTypes.GET_BOOK, currentBook: responseBook.data, bookState: bookDetailStates.AT_WISHLIST, buttonDisabled: true, returnBefore: false});
            }else {
              console.log(bookDetailStates.RENTED_NOT_AT_WISHLIST)
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
    dispatch({type: ActionTypes.GET_BOOK_LOADING});
    const responseData = await getUserData();
    if(responseData.ok){
      const responsePost = await postWishlist(bookId, responseData.data.id);
      if(responsePost.ok){
        dispatch({type: ActionTypes.AT_WISHLIST});
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
