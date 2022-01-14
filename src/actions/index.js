// Action 객체를 만드는 액션 생성자들을 선언한다

import * as types from "./ActionTypes";

export const increment = () => ({ type: types.INCREMENT });
export const decrement = () => ({ type: types.DECREMENT });
// 파라미터로 받은 color 를 Action 객체에 넣어줌
export const setColor = color => ({ type: types.SET_COLOR, color });
