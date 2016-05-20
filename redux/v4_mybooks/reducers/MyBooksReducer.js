// external modules
import update from 'react-addons-update';

// actions
import { SET_BOOKS_DATA, ADD_BOOK, TOGGLE_BOOK_IS_READ } from '../actions/MyBooksActions';

const initialState = {
  books: [],
  isFetching: false,
  initSpinner: false,
};

export const myBooks = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS_DATA:
      return update(state, {
        [action.payload.property]: {
          $set: action.payload.data,
        },
      });
    case ADD_BOOK:
      return update(state, {
        books: {
          $push: action.payload.data,
        },
      });
    case TOGGLE_BOOK_IS_READ:
      return update(state, {
        books: {
          $set: state.books.map(book => Object.assign({}, book, { isRead: (book.id === action.payload.id ? !book.isRead : book.isRead) })),
        },
      });
    default:
      return state;
  }
};
