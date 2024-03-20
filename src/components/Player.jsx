import React, { useState } from "react";

const Player = ({ initialName, symbol, isActive }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  //functions
  const editBtnClickHandler = (e) => {
    e.preventDefault();
    setIsEditing((editing) => !editing);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setPlayerName(e.target.value);
  };

  //Values
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  //logic
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  //jsx
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editBtnClickHandler}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Player;
