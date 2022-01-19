import PropTypes from "prop-types";
import "./Buttons.css";

// 생성 & 삭제 버튼 UI 컴포넌트
export default function Buttons({
  onCreate = () => console.warn("onCreate not defined"),
  onRemove = () => console.warn("onRemove not defined"),
}) {
  return (
    <div className="Buttons">
      <div className="btn add" onClick={onCreate}>
        생성
      </div>
      <div className="btn remove" onClick={onRemove}>
        제거
      </div>
    </div>
  );
}

Buttons.propTypes = {
  onCreate: PropTypes.func,
  onRemove: PropTypes.func,
};
