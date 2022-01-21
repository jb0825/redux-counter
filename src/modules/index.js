// reducer 과 action 파일을 합친 redux modul (Ducks 구조)

import { createAction, handleActions } from "redux-actions";
import { Map, List } from "immutable";

// Action Types
const CREATE = "counter/CREATE";
const REMOVE = "counter/REMOVE";
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";
const SET_COLOR = "counter/SET_COLOR";

// Action Creaters
export const create = createAction(CREATE); // color
export const remove = createAction(REMOVE);
export const increment = createAction(INCREMENT); // index
export const decrement = createAction(DECREMENT); // index
export const setColor = createAction(SET_COLOR); // { index, color }

const initialState = Map({
  counters: List([
    Map({
      number: 0,
      color: "black",
    }),
  ]),
});

// reducer
export default handleActions(
  {
    [CREATE]: (state, action) => {
      const counters = state.get("counters");

      return state.set(
        "counters",
        counters.push(
          Map({
            number: 0,
            color: action.payload,
          })
        )
      );
    },
    [REMOVE]: (state, action) => {
      const counters = state.get("counters");

      return state.set("counters", counters.pop());
    },
    [INCREMENT]: (state, action) => {
      const counters = state.get("counters");

      return state.set(
        "counters",
        counters.update(action.payload, counter =>
          counter.set("number", counter.get("number") + 1)
        )
      );
    },
    [DECREMENT]: (state, action) => {
      const counters = state.get("counters");

      return state.set(
        "counters",
        counters.update(action.payload, counter =>
          counter.set("number", counter.get("number") - 1)
        )
      );
    },
    [SET_COLOR]: (state, action) => {
      const counters = state.get("counters");
      console.log(action.payload);

      return state.set(
        "counters",
        counters.update(action.payload.index, counter =>
          counter.set("color", action.payload.color)
        )
      );
    },
  },
  initialState
);
