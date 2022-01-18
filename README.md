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
