import { useState } from 'react';
import './Square.css';
const Square = (props) => {
  const [option, setOption] = useState(null);

  const onEventHandler = (e) => {
    // If the pawn is already. It simply return
    if (e.target.dataset.index === props.id.toString() && option !== null) {
      return;
    }

    // setting the pawn
    if (e.target.dataset.index === props.id.toString()) {
      setOption(props.playerTerm);
    }
  };

  return (
    <div className="square" data-index={props.id} onClick={onEventHandler}>
      {option}
    </div>
  );
};
export default Square;
