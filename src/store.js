// store.js
import { createStore } from "redux";

// Action types
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

// Action creator
export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

// Reducer
const initialState = {
  data: "",
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

// Create store
const store = createStore(dataReducer);

export default store;
