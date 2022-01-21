import { connect } from "react-redux";
import * as actions from "../modules";
import CounterList from "../components/CounterList";
import getRandomColor from "../utils";

// store 안의 state 값을 props 로 연결해주는 함수
const mapStateToProps = state => ({
  // reducer 에서 immutable Map 형태로 state 코드를 수정했기 때문에
  // 스토어에서 상태를 가져올 때도 Map.get('key') 형태로 가져온다.
  counters: state.get("counters"),
});

// action 생성 및 해당 액션을 dispatch 하는 함수를 props 로 연결해줌
const mapDispatchToProps = dispatch => ({
  onIncrement: index => dispatch(actions.increment(index)),
  onDecrement: index => dispatch(actions.decrement(index)),
  onSetColor: index => {
    const color = getRandomColor();
    dispatch(actions.setColor({ index, color }));
  },
});

// 데이터와 함수들이 props 로 붙은 컴포넌트 생성
const CounterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList);

export default CounterListContainer;
