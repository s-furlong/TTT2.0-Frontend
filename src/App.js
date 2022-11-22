import "./App.css";
import axios from "axios";
import Games from "./components/games";
import { useEffect, useState } from "react";
import { Board } from "./components/board/board";

const API_URL = "http://127.0.0.1:3000/api/v1/games";

async function postAPIData(board) {
  // try {
    const { data } = await axios.post(
      API_URL,
      { board },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

    return data;
  // } catch (error) {
  //   if (axios.isAxiosError(error)) {
  //     console.log('error message: ', error.message);
  //     return error.message;
  //   } else {
  //     console.log('unexpected error: ', error);
  //     return 'An unexpected error occurred';
  //   }
}

function App() {
  const [games, setGame] = useState([]);

  // useEffect(() => {
  //   getAPIData().then((items) => {
  //       setGame(items);
  //   });
  // }, []);

  return (
    <div className="App">
      <h1>TTT 2.0</h1>
      <Board postAPIData={postAPIData}/>
      <Games games={games} />
    </div>
  );
}

export default App;