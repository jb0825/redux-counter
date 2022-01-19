import PropTypes from "prop-types";
import Counter from "./Counter";
import "./CounterList.css";

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
      {...counter}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onSetColor={onSetColor}
    />
  ));

  return <div className="CounterList">{counterList}</div>;
}

CounterList.propTypes = {
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number,
      color: PropTypes.string,
    })
  ),
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func,
};
