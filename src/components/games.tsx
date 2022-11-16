import React from "react";


function Game(props: { games: any[]; }) {
  return (
    <div>
      <h1>These games are from the API</h1>
      {props.games.map((game) => {
        return (
          <div key={game.id}>
            <h2>{game.title}</h2>
            <p>{game.token}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Game;