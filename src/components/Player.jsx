import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  // Stati per gestire se il nome del giocatore è in fase di modifica e il nome stesso
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  // Funzione chiamata quando cambia il valore dell'input del nome del giocatore
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  // Funzione chiamata quando viene cliccato il pulsante "Edit"
  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  // Il nome del giocatore, visualizzato o come input per la modifica
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" onChange={handleChange} required value={playerName} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleEditClick()} className="button">
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
