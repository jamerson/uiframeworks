// external modules
import update from 'react-addons-update';

// actions
import { SET_NAVBAR_DATA } from '../actions/NavbarActions';

const initialState = {
  searchString: '',
  displayAll: true,
};

export const navbar = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAVBAR_DATA:
      return update(state, {
        [action.payload.property]: {
          $set: action.payload.data,
        },
      });
    default:
      return state;
  }
};
