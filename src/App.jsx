import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { DERIVED_ACTIVE_PLAYER } from "./Helper/DERIVED_ACTIVE_PLAYER";

const App = () => {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = DERIVED_ACTIVE_PLAYER(gameTurns);
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
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
};

export default App;
