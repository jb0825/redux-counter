// Action 객체를 만드는 생성자들

import * as types from "./ActionTypes";

// () => ({}) 는
// () => { return {}} 와 동일한 의미이다
export const increment = index => ({ type: types.INCREMENT, index });
export const decrement = index => ({ type: types.DECREMENT, index });
export const setColor = (index, color) => ({
  type: types.SET_COLOR,
  index,
  color,
});

export const create = color => ({ type: types.CREATE, color });
export const remove = () => ({ type: types.REMOVE });
