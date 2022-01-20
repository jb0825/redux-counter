import * as types from "../actions/ActionTypes";
import { Map, List } from "immutable";

// Map, List : Immutable.js 의 데이터 구조
// data.toJS() 로 변환해줘야 javascript 로 사용할 수 있음
const initialState = Map({
  counters: List([
    Map({
      number: 0,
      color: "black",
    }),
  ]),
});

// 리듀서 함수 정의
export default function counter(state = initialState, action) {
  // 레퍼런스 생성
  const counters = state.get("counters");

  // Immutable 의 사용으로
  /*
    return {
      ...counters,
      {
        number: 0,
        color: action
      }
    }
  */
  // 와 같은 코드들을 아래 스위치문처럼 변경할 수 있다.

  switch (action.type) {
    // 카운터 생성
    case types.CREATE:
      return state.set(
        "counters",
        counters.push(
          Map({
            number: 0,
            color: action.color,
          })
        )
      );

    case types.REMOVE:
      return state.set("counters", counters.pop());

    case types.INCREMENT:
      return state.set(
        "counters",
        counters.update(action.index, counter =>
          counter.set("number", counter.get("number") + 1)
        )
      );

    case types.DECREMENT:
      return state.set(
        "counters",
        counters.update(action.index, counter =>
          counter.set("number", counter.get("number") - 1)
        )
      );

    case types.SET_COLOR:
      return state.set(
        "counters",
        counters.update(action.index, counter =>
          counter.set("color", action.color)
        )
      );

    default:
      return state;
  }
}
