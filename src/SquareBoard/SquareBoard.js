import './SquareBoard.css';
import { useState } from 'react';
import Square from '../Square/Square.js';

const SquareBoard = (props) => {
  // Initial state of the game
  const [board, setboard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  // It's for setting the content in the square
  // Toggle pawn X and O. Initially it is 'X'
  const [togglePlayer, setTogglePlayer] = useState('X');

  const [toggle, setToggle] = useState(false);

  const onPlayerHandler = (e) => {
    // If the pawn is already, will not changing the content square(box)
    if (e.target.textContent === 'X' || e.target.textContent === 'O') {
      setTogglePlayer(togglePlayer);
      return;
    }

    if (!toggle && e.target.className === 'square') {
      //
      // Sending the status of the player to app.js
      props.onPlayerData(togglePlayer);

      //Toggle the turn
      setTogglePlayer('O');
      setToggle(true);
    } else if (e.target.className === 'square') {
      //
      // Sending the status of the player to app.js
      props.onPlayerData(togglePlayer);
      props.onPlayerData(togglePlayer);

      //Toggle the turn
      setTogglePlayer('X');
      setToggle(false);
    }

    // Updating the game state
    const square = board;
    square[e.target.dataset.index] = togglePlayer;
    setboard(square);

    // calculate the winner
    const calculateWinner = (square) => {
      // possibilities of winning the game
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
          return square[a];
        }
      }
      return;
    };

    // declaring the winner
    const winner = calculateWinner(square);
    if (winner) {
      props.declare(winner);
    }
  };

  return (
    <div className="squareboard" onClick={onPlayerHandler}>
      <div className="each_square" data-index="1">
        <Square playerTerm={togglePlayer} id={0} />
        <Square playerTerm={togglePlayer} id={1} />
        <Square playerTerm={togglePlayer} id={2} />
      </div>
      <div className="each_square" data-index="2">
        <Square playerTerm={togglePlayer} id={3} />
        <Square playerTerm={togglePlayer} id={4} />
        <Square playerTerm={togglePlayer} id={5} />
      </div>
      <div className="each_square" data-index="3">
        <Square playerTerm={togglePlayer} id={6} />
        <Square playerTerm={togglePlayer} id={7} />
        <Square playerTerm={togglePlayer} id={8} />
      </div>
    </div>
  );
};

export default SquareBoard;
