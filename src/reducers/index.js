import { combineReducers } from "redux";
import color from "./color";
import number from "./number";

// 상태변화하기 전의 초기 상태
/*
const initialState = {
  number: 0,
  color: "black",
};
*/

/*
 * reducer 함수 정의
 *
 * state 가 undefined 일때 (store 가 생성될때) state 의 기본값을 initialState 로 사용한다.
 * action.type 에 따라 새 상태를 만들어 반환한다.
 * reducer 는 state 를 직접 수정하면 안되고,
 * 기존 상태값에 원하는 값을 덮어쓴 새로운 객체를 반환해야 한다.
 */
/*
const counter = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      };
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      };
    case types.SET_COLOR:
      return {
        ...state,
        color: action.color,
      };
    default:
      return state;
  }
};
*/

//위의 reducer 과 initialState 를 color, number 서브 리듀서로 분할하였다.

// 서브 리듀서 합치기
const reducers = combineReducers({
  numberData: number,
  colorData: color,
});

export default reducers;
