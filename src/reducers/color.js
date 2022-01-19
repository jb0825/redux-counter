import * as types from "../actions/ActionTypes";

const initialState = {
  color: "black",
};

export default function color(state = initialState, action) {
  switch (action.type) {
    case types.SET_COLOR:
      return { color: action.color };
    default:
      return state;
  }
}
