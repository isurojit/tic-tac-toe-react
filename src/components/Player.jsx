import React, { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const editBtnClickHandler = (e) => {
    setIsEditing(true);
  };

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required placeholder="Change Name" />;
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editBtnClickHandler}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Player;
