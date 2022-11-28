function GameStatus({ currentMove }) {
  const gameWon = currentMove.win;
  const gameTie = currentMove.draw

  return (
    <div>
      {gameWon &&
        <h2 style={style}>
          {currentMove.winner} is the winner!
        </h2>
      }

      {gameTie &&
        <h2 style={style}>
          Game is a tie!
        </h2>
      }

      {!gameWon && !gameTie &&
        <h2 style={style}>
          Current turn: { currentMove.token }
        </h2>
      }
    </div>
  );
}

const style = {
	borderRadius: "2rem",
  border: "10px solid Pink",
  textAlign: "center",
	width: "250px",
	height: "20px",
  padding: "2rem",
	margin: "0 auto",
};

export default GameStatus;