// src/redux/reducers/exampleReducer.js
import { EXAMPLE_ACTION } from "../actions";

const initialState = {
  exampleData: null,
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return {
        ...state,
        exampleData: action.payload,
      };
    default:
      return state;
  }
};

export default exampleReducer;
