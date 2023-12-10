import React, {Fragment, useState } from 'react'
import WinGamePatt from './WinGamePatt'
import cellsgrid from './cellsgrid';
import GameBoard from './GameBoard';
import GamePlay from './GamePlay';


 const Players = (props) => {
    
    const [cells, setCells] = useState([...cellsgrid]);
    const [endGame, setEndGame] = useState(true);
    const [player, setPlayer] = useState("X");
    const [score, setScore] = useState(0);
    const [playerTurnArr, setPlayerTurnArr] = useState(["-", "-", "-", "-", "-", "-", "-", "-", "-"]);
   

    let winResult = WinGamePatt(cells) 
    let resetCells = [...cells]
    console.log("players start resetCells")
    console.log(resetCells)
    console.log("cellsgrid here")
    console.log(cellsgrid)
 
    console.log("players resetRes");
  
    function addScore(score) {
      setScore(score + 1)
    }

    const playerTurn = (pl) => {
      if(player === "X") {
        playerTurnArr.push(player)
      } else {
        playerTurnArr.push(player)
      }
      return playerTurnArr
    }

    
    const WinPlayerTurn = (pl) => {
      
      let statusWin;
      if(player === "X" && winResult) {
        // let pl1Score 
        statusWin = <p>Player {winResult} is a winner and the score is: ""</p>
        
      } else if(player === "O" && winResult){
        // let pl2Score
        statusWin = <p>Player {winResult} is a winner and the score is: ""</p>
        
      } else if(!player === "O" && !player === "X"){
        statusWin = <p>It is a draw!</p>
        
      } else {
        statusWin = <p>To play</p>
      }
      return statusWin;
    }

    let status
    const gameStatus = (pl) => {
      console.log("This is winResult")
      console.log(winResult)
      // checks the cell for an empty string
      let check = resetCells.some((cell) => cell.value !== "")
      if(check) {
        status = <p>Game in play</p>
      } else {
        status = <p>Game not play</p>
      }
      return status 
      }
      
    
    let resetGamePlay = () => {
        // of a new copy of cellsgrid array in reference
        // resetGame = cells
        resetCells = [...cellsgrid]
        for(let i = 0; i < resetCells.length; i++) {
            resetCells[i]={id: i+1, value: ""} 
            
        }
        setCells(resetCells)
        console.log("This is newCells")
        console.log(resetCells)
    }

    // rendering function calls below
    return (
        <Fragment>
        <div>
            <p>Hello from players</p>
           <GameBoard 
              cells={resetCells}
              // updates gameboard here, through props, renders here
              setCells={setCells}
              player={player}
              setPlayer={setPlayer}
             
           />
           
           {gameStatus(winResult)}
           {WinPlayerTurn(winResult)}
           {playerTurn}
        </div>
        <div>
            <GamePlay 
              cells={cells}
              setCells={setCells}
              resetGamePlay={resetGamePlay}
            />
        </div>
     
        </Fragment>
    )
}

export default Players;