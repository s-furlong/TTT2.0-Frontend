function GameStatus({ games }) {
  const gameWon = games.win;
  const gameTie = games.draw

  return (
    <div>
      {gameWon == true &&
        <h2 style={style}>
          {games.winner} is the winner!
        </h2>
      }

      {gameTie == true &&
        <h2 style={style}>
          Game is a tie!
        </h2>
      }

      {gameWon == false && gameTie == false &&
        <h2 style={style}>
          Current turn: { games.token }
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