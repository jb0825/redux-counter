import * as types from "../actions/ActionTypes";

const initialState = {
  counters: [
    {
      number: 0,
      color: "black",
    },
  ],
};

// 리듀서 함수 정의
export default function counter(state = initialState, action) {
  // 레퍼런스 생성
  const { counters } = state;
  const index = action.index;

  switch (action.type) {
    // 카운터 생성
    case types.CREATE:
      return {
        counters: [
          ...counters,
          {
            number: 0,
            color: action.color,
          },
        ],
      };
    // slice 로 맨 마지막 카운터 제거
    case types.REMOVE:
      return {
        counters: counters.slice(0, counters.length - 1),
      };
    // index 일치하는 카운터 값 증가
    case types.INCREMENT:
      return {
        counters: [
          ...counters.slice(0, index),
          {
            ...counters[index],
            number: counters[index].number + 1,
          },
          ...counters.slice(index + 1, counters.length),
        ],
      };
    // index 일치하는 카운터 값 감소
    case types.DECREMENT:
      return {
        counters: [
          ...counters.slice(0, index),
          {
            ...counters[index],
            number: counters[index].number - 1,
          },
          ...counters.slice(index + 1, counters.length),
        ],
      };
    // index 일치하는 카운터 색 변경
    case types.SET_COLOR:
      return {
        counters: [
          ...counters.slice(0, index),
          {
            ...counters[index],
            color: action.color,
          },
          ...counters.slice(index + 1, counters.length),
        ],
      };
    default:
      return state;
  }
}
