export const SET_NAVBAR_DATA = 'SET_NAVBAR_DATA';
export const setData = (property, data) => ({
  type: SET_NAVBAR_DATA,
  payload: {
    property: property,
    data: data
  }
});

export const setSearchString = (searchString) => setData('searchString', searchString);
export const swithDisplayAll = (value) => setData('displayAll', value);
