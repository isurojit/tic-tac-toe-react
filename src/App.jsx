import React from "react";

const App = () => {
  return (
    <main>
      <div id="game-container">
        {/* PLAYERS */}
        <ol id="players">
          <li>
            <span className="player-name">Player 1</span>
            <span className="player-symbol">X</span>
          </li>
          <li>
            <span className="player-name">Player 1</span>
            <span className="player-symbol">X</span>
          </li>
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
};

export default App;
