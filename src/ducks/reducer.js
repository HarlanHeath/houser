const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  url: ""
};

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADD = "UPDATE_ADD";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_URL = "UPDATE_URL";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return Object.assign({}, state, { name: action.payload });

    case UPDATE_ADD:
      return Object.assign({}, state, { address: action.payload });

    case UPDATE_CITY:
      return Object.assign({}, state, { city: action.payload });

    case UPDATE_STATE:
      return Object.assign({}, state, { state: action.payload });

    case UPDATE_ZIP:
      return Object.assign({}, state, { zipcode: action.payload });

    case UPDATE_URL:
      return Object.assign({}, state, { url: action.payload });

    default:
      return state;
  }
}

export function updateUrl(url) {
  return {
    type: UPDATE_URL,
    payload: url
  };
}

export default reducer;
