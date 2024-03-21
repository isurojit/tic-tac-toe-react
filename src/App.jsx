import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { DerivedActivePlayer } from "./Helper/DerivedActivePlayer";

const App = () => {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = DerivedActivePlayer(gameTurns);
  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((pre) => {
      const currentPlayer = DerivedActivePlayer(pre);
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
