import { connect } from "react-redux";
import * as actions from "../modules";
import Buttons from "../components/Buttons";
import getRandomColor from "../utils";
import CounterListContainer from "./CounterListContainer";

const App = props => {
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
// App 컴포넌트에서 store 값을 사용하지않으니 mapToState 를 null 로 설정
export default connect(null, mapToDispatch)(App);
