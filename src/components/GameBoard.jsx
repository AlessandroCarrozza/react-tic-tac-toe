const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

console.log(initialGameBoard);

export default function GameBoard({ onSelectSquare, turns }) {
  //   const [gameBoard, setGameboard] = useState(initialGameBoard);

  //   function handleSelectSquare(rowIndex, colIndex) {
  //     setGameboard((prevGameBoard) => {
  //       console.log(...prevGameBoard);
  //       const updatedBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       console.log(prevGameBoard);
  //       console.log(updatedBoard);
  //       return updatedBoard;
  //     });
  //     onSelectSquare();
  //   }

  // Inizializza la scacchiera di gioco
  let gameBoard = initialGameBoard;

  // Aggiorna la scacchiera di gioco in base alle mosse dei giocatori
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={
                    // () => handleSelectSquare(rowIndex, colIndex)
                    () => onSelectSquare(rowIndex, colIndex)
                  }
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
