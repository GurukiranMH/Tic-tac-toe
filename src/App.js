import React from 'react';
import './App.css';
import PlayerInfo from './PlayerInfo/PlayerInfo.js';
import SquareBoard from './SquareBoard/SquareBoard.js';
import { useState } from 'react';
function App() {
  const [winner, setWinner] = useState('');

  const [playerData, setPlayerData] = useState('X');

  // After completeing  X turn immediatly change the turn to O
  const playerHandler = (data) => {
    if (data === 'X') setPlayerData('O');
    else setPlayerData('X');
  };

  // Settng the player winning statement
  const declareWinner = (winner) => {
    setWinner(`Player: ${winner} is the winner`);
  };

  // Reset the game
  const resetHandler = () => {
    setPlayerData('X');
    window.location.reload();
  };

  return (
    <div className="App">
      <PlayerInfo playerData={playerData} winner={winner} />
      <button className="reset-btn" onClick={resetHandler}>
        Reset
      </button>
      <SquareBoard onPlayerData={playerHandler} declare={declareWinner} />
    </div>
  );
}

export default App;
