import React, { useState } from "react";
import GameCircle from "./GameCircle";
import "../Game.css";
import GameHeader from "./GameHeader";
import GameFooter from "./GameFooter";
import { isWinner } from "./Helper";

const NO_CIRCLES = 16;
const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));

  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

  console.log(gameBoard);

  const initBoard = () => {
    const circles = [];

    for (let i = 0; i < NO_CIRCLES; i++) {
      circles.push(renderCircle(i));
    }

    return circles;
  };

  const circleClicked = (id) => {
    console.log("circle clicked: " + id);

    if (isWinner(gameBoard, id, currentPlayer)) {
      console.log("Win");
      debugger;
    }

    setGameBoard((prev) => {
      return prev.map((circle, pos) => {
        if (pos === id) return currentPlayer;

        return circle;
      });
    });

    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);

    console.log(currentPlayer);
  };

  const renderCircle = (id) => {
    return (
      <>
        <GameHeader player={currentPlayer} />
        <GameCircle
          key={id}
          id={id}
          className={`player-${gameBoard[id]}`}
          onCircleClicked={circleClicked}
        />
        <GameFooter />
      </>
    );
  };

  return <div className="gameBoard">{initBoard()}</div>;
};

export default GameBoard;
