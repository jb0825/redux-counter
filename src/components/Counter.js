import PropTypes from "prop-types";
import "./Counter.css";

export default function Counter({
  number = 0,
  color = "black",
  onIncrement = () => console.log("onIncrement not defined"),
  onDecrement = () => console.log("onDecrement not defined"),
  onSetColor = () => console.log("onSetColor not defined"),
}) {
  return (
    <div
      className="Counter"
      onClick={onIncrement}
      // onContextMenu : 마우스 우클릭 이벤트
      onContextMenu={e => {
        e.preventDefault();
        onDecrement();
      }}
      onDoubleClick={onSetColor}
      style={{ backgroundColor: color }}
    >
      {number}
    </div>
  );
}

Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func,
};
