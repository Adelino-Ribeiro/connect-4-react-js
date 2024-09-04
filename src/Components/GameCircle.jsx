import React from "react";
import "../Game.css";

const GameCircle = ({ id, children, onCircleClicked, className }) => {

  // const color = (id % 2 === 0) ?  'odd' : 'even';

  return (
    <div
      className={`gameCircle ${className}`}
      onClick={() => onCircleClicked(id)}
    >
      {children}
    </div>
  );
};

export default GameCircle;
