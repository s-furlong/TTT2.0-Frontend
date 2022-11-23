function GameStatus({ games }) {
  return (
    <div>
        <h2 style={style}>Current turn: { games.token }</h2>
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