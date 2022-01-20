# Redux 연습

[참고 링크](https://redux.vlpt.us/)

## Presentational(Dumb) Components & Container(Smart) Components 구조

**Presentational component** :

View 만을 담당하는 컴포넌트. Redux store 에 직접적인 접근 권한이 없으며
대부분 state 를 가지고 있지 않다. 갖고있을 경우 UI 에 관련된 state 이다.

**Container Component** :

스타일을 가지고있지 않으며 state 를 가진다.
Redux 에 직접적으로 접근할 수 있다.

## Packages

- **actions** :
  action 타입, action 생성자 파일들
  action 은 하나의 객체이며 모든 액션 객체는 type값을 가진다.

- **components** : presentational components

- **containers** : container components

- **reducers** :
  store 의 기본상태 및 상태의 업데이트를 담당하는 reducer 파일들
  reducer 는 action 의 타입에 따라 변화를 일으키는 함수.

- **utils** : 일부 컴포넌트들에서 공용되는 파일들

## Redux

[참고 링크](https://13akstjq.github.io/redux/2019/12/14/redux-redux%EC%99%84%EB%B2%BD%EC%A0%95%EB%A6%AC.html)

**Action** :

action 은 store 에 저장된 state 에 무슨 동작을 할 것인지 적어놓는 객체이다.
action 에는 type 이 필수로 필요하다.
type 은 다음과 같은 방법으로 작성한다.

```
//action types
const ADD_TODO = 'ADD_TODO'
```

action 은 다음과 같은 방법으로 작성한다.

```
{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}
```

**Action Creaters** (액션 생성자) :

액션 생성자는 redux 에 있는 기능은 아니지만 action 객체를 리턴해주는 함수를 만들어 놓는 것이다.
(무조건 필요한 것은 아님)
예시는 다음과 같다.

```
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
```

**Dispatch** :

dispatch 는 action creater 로 리턴해준 action 을 파라미터로 받아서
store 의 reducer 로 넘겨주는 역할을 한다.
dispatch 가 reducer 에게 action 을 넘겨주면, reducer 는 action type 을 보고 그에 맞는 행동을 한다.

dispatch 의 호출은 다음과 같이 한다.

`dispatch(addTodo(text))`

또는 아래와 같이 함수를 만들어 한다.

```
const boundAddTodo = text => dispatch(addTodo(text))
boundAddTodo(text)
```

**Reducer** :

dispatch 로 action 을 받아서 action type 에 맞게 행동하는 함수이다.

todoApp 함수는 state 가 들어오지 않았을때 state 에 initialState 값을 넣어준다.

```
const initialState = {
  todos: []
}

function todoApp(state = initialState, action) {
  return state
}
```

action 이 여러개일 때 다음과 같이 case 를 구분하여 행동한다.
아래의 코드가 reducer 이다.

```
function todos(state = [], action) {
  switch (action.type) {
  case ADD_TODO:
  return [
    ...state,
    {
      text: action.text,
      completed: false
    }
  ]
  case TOGGLE_TODO:
    return state.map((todo, index) => {
      if (index === action.index) {
        return Object.assign({}, todo, {
        completed: !todo.completed
        })
      }
      return todo
    })
  default:
    return state
  }
}
```

- **combineReducers** :
  여러개의 recuder 를 하나의 root reducer 로 만들어주는 것이다.
  (redux 는 기본적으로 하나의 store 멀티 reducer 의 형태를 갖는다)

  `const todoApp = combineReducers({ user, todos })`

**Store** :

store 는 모든 컴포넌트에서 사용할 수 있는 Global State 를 저장해놓는 저장소이다.
store 는 dispatch 함수를 통해서만 state 에 접근할 수 있다.

스토어의 생성은 다음과 같이 한다.

`const store = createStore(todoApp)`

스토어는 파라메터로 reducer 를 받아야 한다.

```
// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
unsubscribe()
```
