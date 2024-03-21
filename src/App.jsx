import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import DERIVED_ACTIVE_PLAYER from "./Helper/DERIVED_ACTIVE_PLAYER.js";
import WINNING_COMBINATIONS from "./Helper/WINNING_COMBINATIONS.js";
import INITIAL_GAME_BOARD from "./Helper/INITIAL_GAME_BOARD.js";
import GameOver from "./components/GameOver.jsx";

const App = () => {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  const activePlayer = DERIVED_ACTIVE_PLAYER(gameTurns);

  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  // functions
  const handleReset = () => {
    setGameTurns([]);
  };

  const handlePlayerNameChage = (symbol, newName) => {
    setPlayers((pre) => {
      return {
        ...pre,
        [symbol]: newName,
      };
    });
  };

  //Winning combination logic
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  const hasDraw = gameTurns.length === 9 && !winner;
  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((pre) => {
      const currentPlayer = DERIVED_ACTIVE_PLAYER(pre);
      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...pre,
      ];

      return updateTurns;
    });
  };
  return (
    <main>
      <div id="game-container">
        {/* PLAYERS */}
        <ol id="players" className="highlight-player">
          <Player
            initialName={players.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChage}
          />
          <Player
            initialName={players.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChage}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleReset} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
};

export default App;
