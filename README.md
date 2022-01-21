# Ducks 구조 & redux-action

[https://redux.vlpt.us/4-2-redux-actions.html](https://redux.vlpt.us/4-2-redux-actions.html)

**Ducks 구조** :
Reducer 파일 안에 액션 타입과 액션 생성자 함수를 함께 넣어서 관리하고
이를 '모듈' 이라고 부른다.

Ducks 구조의 예시 :

```
// widgets.js

// Actions
const LOAD   = 'my-app/widgets/LOAD';
const CREATE = 'my-app/widgets/CREATE';
const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'my-app/widgets/REMOVE';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function loadWidgets() {
  return { type: LOAD };
}

export function createWidget(widget) {
  return { type: CREATE, widget };
}

export function updateWidget(widget) {
  return { type: UPDATE, widget };
}

export function removeWidget(widget) {
  return { type: REMOVE, widget };
}
```

액션 타입을 만들 때 위 코드와 같이 `app/reducer/ACTION_TYPE` 형식으로 만들어야 한다.
reducer 는 export default 로 내보내고, action creater 는 export 로 내보내야 한다.

## redux-action

redux-action 은 액션을 쉽게 관리할수 있게 해주는 redux 의 패키지이다.
`createAction` 과 `handleAction` 함수가 있다.

**createAction 을 통한 액션 생성 자동화** :

기존의 액션 생성자 코드

```
export const increment = (index) => ({
    type: types.INCREMENT,
    index
});
```

를 createAction 을 사용해 다음과 같이 자동화할 수 있다.

```
export const increment = createAction(types.INCREMENT);
```

이때 파라미터로 전달받은 값은 액션의 payload 값으로 설정한다.
예시로 `increment(3)` 가 실행된다면 다음과 같은 객체를 만들어준다.

```
{
    type: 'INCREMENT',
    payload: 5
}
```

setColor 의 경우는 다음과 같다.

```
export const setColor = createAction(types.SET_COLOR);
```

```
setColor({index: 5, color: '#fff'})
/* 결과:
{
    type: 'SET_COLOR',
    payload: {
        index: 5,
        color: '#fff'
    }
}
*/
```

**switch 문 대신 handleActions 사용하기** :

액션 타입에 따라 다른 작업을 하기 위해 기존에 switch 문을 사용했다.
switch 문을 handleAction 으로 대체할 수 있다.

```
const reducer = handleActions({
  INCREMENT: (state, action) => ({
    counter: state.counter + action.payload
  }),

  DECREMENT: (state, action) => ({
    counter: state.counter - action.payload
  })
}, { counter: 0 });
```
