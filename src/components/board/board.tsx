import { Cell } from '../cell/cell';
import {useState} from 'react';

export const Board = () => {
    const gameBoard = ["_","_","_","_","_","_","_","_","_"]

    const [board, setBoard] = useState<Array<string>>(gameBoard)
    const [playerTokenX, setPlayerTokenX] = useState(true);
    
    
    const changeCell = (i:number) => {
        const updateBoard = [...board];
        if (updateBoard[i] === "_"){
            updateBoard[i] = playerTokenX ? "X" : "O";
            setBoard(updateBoard);
            setPlayerTokenX(!playerTokenX);
        } else {
            updateBoard;
        }    
    };

    return(
    <div style={style} data-testid="game-board">
        {board.map((cellValue, i) => {
            return <Cell id={`cell_${i}`} key={i} value={cellValue} onClick={() => changeCell(i)} />
        })}
    </div>
    )   
}

const style = {
	border: "10px solid pink",
	borderRadius: "2rem",
	width: "250px",
	height: "250px",
    padding: "3rem",
	margin: "0 auto",
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};