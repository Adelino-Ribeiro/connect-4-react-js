import React, {useState} from "react";
import GameCircle from "./GameCircle";
import '../Game.css';

const GameBoard = () => {

  const [gameBoard, setGameBoard] = useState(Array(16).fill(0));

  const circleClicked = (id) => {
    debugger;
    console.log("circle clicked: " + id);

    gameBoard[id] = 1;

    setGameBoard(gameBoard);

    console.log(gameBoard);

  }

  return (
    <div className="gameBoard">
      <GameCircle id={1} className='player-1' onCircleClicked={circleClicked}/>
      <GameCircle id={2} className='player-2' onCircleClicked={circleClicked}/>
      <GameCircle id={3} onCircleClicked={circleClicked}/>
      <GameCircle id={4} onCircleClicked={circleClicked}/>
      <GameCircle id={5} onCircleClicked={circleClicked}/>
      <GameCircle id={6} onCircleClicked={circleClicked}/>
      <GameCircle id={7} onCircleClicked={circleClicked}/>
      <GameCircle id={8} onCircleClicked={circleClicked}/>
      <GameCircle id={9} onCircleClicked={circleClicked}/>
      <GameCircle id={10} onCircleClicked={circleClicked}/>
      <GameCircle id={11} onCircleClicked={circleClicked}/>
      <GameCircle id={12} onCircleClicked={circleClicked}/>
      <GameCircle id={13} onCircleClicked={circleClicked}/>
      <GameCircle id={14} onCircleClicked={circleClicked}/>
      <GameCircle id={15} onCircleClicked={circleClicked}/>
      <GameCircle id={16} onCircleClicked={circleClicked}/>
    </div>
  );
};

export default GameBoard;
