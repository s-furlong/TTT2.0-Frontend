import "./App.css";
import axios from "axios";
import Games from "./components/games";
import { useEffect, useState } from "react";
import { Board } from "./components/board/board";

const API_URL = "http://127.0.0.1:3000/api/v1/games";

async function getAPIData() {
  const response = await axios.get(API_URL);
  return response.data;
}

function App() {
  const [games, setGame] = useState([]);

  useEffect(() => {
    getAPIData().then((items) => {
        setGame(items);
    });
  }, []);

  return (
    <div className="App">
      <h1>TTT 2.0</h1>
      <Board />
      <Games games={games} />
    </div>
  );
}

export default App;