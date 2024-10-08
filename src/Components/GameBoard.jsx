import React, { useState } from "react";
import GameCircle from "./GameCircle";
import "../Game.css";
import GameHeader from "./GameHeader";
import GameFooter from "./GameFooter";
import { isDraw, isWinner } from "./Helper";
import {
  NO_CIRCLES,
  NO_PLAYER,
  PLAYER_1,
  PLAYER_2,
  GAME_STATE_PLAYING,
  GAME_STATE_WIN,
  GAME_STATE_DRAW,
} from "../Components/Constants";

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));

  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

  const [gameState, setGameState] = useState(GAME_STATE_PLAYING);

  const [winPlayer, setWinPlayer] = useState(NO_PLAYER);

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

    if (gameBoard[id] !== NO_PLAYER) return;

    if (gameState !== GAME_STATE_PLAYING) return;

    if (isWinner(gameBoard, id, currentPlayer)) {
      setGameState(GAME_STATE_WIN);
      setWinPlayer(currentPlayer);
    }

    if (isDraw(gameBoard, id, currentPlayer)) {
      setGameState(GAME_STATE_DRAW);
      setWinPlayer(NO_PLAYER);
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
      <GameCircle
        key={id}
        id={id}
        className={`player-${gameBoard[id]}`}
        onCircleClicked={circleClicked}
      />
    );
  };

  return (
    <>
      <GameHeader
        gameState={gameState}
        currentPlayer={currentPlayer}
        winPlayer={winPlayer}
      />
      <div className="gameBoard">{initBoard()}</div>
      <GameFooter />
    </>
  );
};

export default GameBoard;
