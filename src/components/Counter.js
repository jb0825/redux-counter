import "./Counter.css";
import PropTypes from "prop-types";

// props 에 default value 지정
const Counter = ({
  number = 0,
  color = "black",
  onIncrement = () => console.warn("onIncrement not defined"),
  onDecrement = () => console.warn("onDecrement not defined"),
  onSetColor = () => console.warn("onSetColor not defined"),
}) => {
  const test = () => console.log("test");

  return (
    <div
      className="Counter"
      onClick={onIncrement}
      // onContextMenu: 마우스 우클릭 이벤트
      onContextMenu={e => {
        e.preventDefault();
        onDecrement();
      }}
      onDoubleClick={test}
      style={{ backgroundColor: color }}
    >
      {number}
    </div>
  );
};

// props 의 타입 검사하는 PropTypes
Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func,
};

export default Counter;
