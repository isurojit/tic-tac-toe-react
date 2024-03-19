import React from "react";
import Player from "./components/Player";

const App = () => {
  return (
    <main>
      <div id="game-container">
        {/* PLAYERS */}
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
};

export default App;
