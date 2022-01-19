import Counter from "../components/Counter";
import * as actions from "../actions";
import { connect } from "react-redux";
import getRandomColor from "../utils";

// store 안의 값을 props 로 연결해주는 함수
const mapStateToProps = state => ({
  number: state.numberData.number,
  color: state.colorData.color,
});

// action 생성자로 action 을 생성하고
// 해당 action 을 dispatch 하는 함수를 만든 후 이를 props 로 연결한다
const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => dispatch(actions.setColor(getRandomColor())),
});

// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 한다.
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;
