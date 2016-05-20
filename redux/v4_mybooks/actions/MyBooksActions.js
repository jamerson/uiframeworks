import books from '../server/data';

export const SET_BOOKS_DATA = 'SET_BOOKS_DATA';
export const setData = (property, data) => ({
  type: SET_BOOKS_DATA,
  payload: {
    property: property,
    data: data
  }
});

export const setFetching = (isFetching) => setData('isFetching', isFetching);
export const initSpinner = (initSpinner) => setData('initSpinner', initSpinner);
export const setBooks = (books) => setData('books', books);

export const fetchBooks = () => (dispatch) => {
  dispatch(setFetching(true));
  dispatch(initSpinner(true));

  setTimeout(() => {
    dispatch(initSpinner(false));
    setTimeout(() => {
      dispatch(setFetching(false));
      dispatch(setBooks(books));
    }, 1500);
  }, 1500);
}

// es5
export var ADD_BOOK = 'ADD_BOOK';
export var addBook = function(book) {
  return {
    type: ADD_BOOK,
    payload: {
      data: book
    }
  }
};

// es5
export var TOGGLE_BOOK_IS_READ = 'TOGGLE_BOOK_IS_READ';
export var toggleBookIsRead = function(id) {
  return {
    type: TOGGLE_BOOK_IS_READ,
    payload: {
      id: id
    }
  }
};
