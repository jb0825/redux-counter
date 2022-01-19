import * as actions from "../actions";

// store 안의 값을 props 로 연결해주는 함수
const mapStateToProps = state => ({
  number: state.number,
  color: state.color,
});

// action 생성자로 action 을 생성하고
// 해당 action 을 dispatch 하는 함수를 만든 후 이를 props 로 연결한다
const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(actions.increment()),
});
