import "./App.css";
import axios from "axios";
import Games from "./components/games";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/api/v1/games";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function App() {
  const [games, setGame] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setGame(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1>TTT 2.0</h1>
      <Games games={games} />
    </div>
  );
}

export default App;