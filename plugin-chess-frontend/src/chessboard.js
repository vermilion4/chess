import React from 'react';

import "./chessboard.css";

const verticalAxis = ["1","2","3","4","5","6","7","8"]
const horizontalAxis = ["a","b","c","d","e","f","g","h"]

export default function Chessboard(){
    let board = []

    for(let i=verticalAxis.length - 1;i>=0;i--){
        for(let j=0;j<horizontalAxis.length;j++){

            const numbers = i + j + 2

            if(numbers % 2 === 0){
                board.push(<div className="tile black-tile">[{horizontalAxis[j]}{verticalAxis[i]}]</div>)
            }
            else{
                board.push(<div className="tile white-tile">[{horizontalAxis[j]}{verticalAxis[i]}]</div>)
            }
        }
    }

    return (
        <div id="chessboard">
            <div id="board">
            {board}
            </div>
        </div>
    )
}