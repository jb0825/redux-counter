// Action 객체를 만드는 생성자들

import * as types from "./ActionTypes";

// () => ({}) 는
// () => { return {}} 와 동일한 의미이다
export const increment = () => ({ type: types.INCREMENT });
export const decrement = () => ({ type: types.DECREMENT });
export const setColor = color => ({ type: types.SET_COLOR, color });
