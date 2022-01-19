import { connect } from "react-redux";
import * as actions from "../actions";
import CounterList from "../components/CounterList";
import getRandomColor from "../utils";

// store 안의 state 값을 props 로 연결해주는 함수
const mapStateToProps = state => ({
  counters: state.counters,
});

// action 생성 및 해당 액션을 dispatch 하는 함수를 props 로 연결해줌
const mapDispatchToProps = dispatch => ({
  onIncrement: index => dispatch(actions.increment(index)),
  onDecrement: index => dispatch(actions.decrement(index)),
  onSetColor: index => dispatch(actions.setColor(index, getRandomColor())),
});

// 데이터와 함수들이 props 로 붙은 컴포넌트 생성
const CounterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList);

export default CounterListContainer;
