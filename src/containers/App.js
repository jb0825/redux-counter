import { connect } from "react-redux";
import * as actions from "../actions";
import Buttons from "../components/Buttons";
import getRandomColor from "../utils";
import CounterListContainer from "./CounterListContainer";

const App = props => {
  console.log(props);

  const { onCreate, onRemove } = props;

  return (
    <div>
      <Buttons onCreate={onCreate} onRemove={onRemove} />
      <CounterListContainer />
    </div>
  );
};

// 액션함수 준비하고 App 의 props 로 전달
const mapToDispatch = dispatch => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: index => dispatch(actions.remove(index)),
});

// 리덕스에 연결시키고 내보낸다
// store 에서 필요한 값이 App 컴포넌트에는 없으니 null 로 설정
export default connect(null, mapToDispatch)(App);
