import PropTypes from "prop-types";
import Counter from "./Counter";
import "./CounterList.css";
import { List } from "immutable";

export default function CounterList({
  counters = [],
  onIncrement = () => console.warn("onIncrement not defined"),
  onDecrement = () => console.warn("onDecrement not defined"),
  onSetColor = () => console.warn("onColorSet not defined"),
}) {
  const counterList = counters.map((counter, i) => (
    <Counter
      key={i}
      index={i}
      // counter 가 immutable 의 List 구조이기 때문에
      // javascript 에서 사용하기 위해 변환해줘야 한다 (toJS()).
      {...counter.toJS()}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onSetColor={onSetColor}
    />
  ));

  return <div className="CounterList">{counterList}</div>;
}

CounterList.propTypes = {
  counters: PropTypes.instanceOf(List),
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func,
};
