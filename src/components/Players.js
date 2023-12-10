import React, {Fragment, useState, useEffect} from 'react'
import WinGamePatt from './WinGamePatt'
import cellsgrid from './cellsgrid';
import GameBoard from './GameBoard';
import GamePlay from './GamePlay';


 const Players = (props) => {
    
    const [cells, setCells] = useState([...cellsgrid]);
    const [player, setPlayer] = useState("X");
    const [pl1Score, setpl1Score] = useState(0);
    const [pl2Score, setpl2Score] = useState(0);
    // const [playerTurnArr, setPlayerTurnArr] = useState(["-", "-", "-", "-", "-", "-", "-", "-", "-"]);
   
    
    let playerScorePl1 = useEffect(() => setpl1Score(pl1Score + 1), [])

    let winResult = WinGamePatt(cells) 
    let resetCells = [...cells]
    console.log("players start resetCells")
    console.log(resetCells)
    console.log("cellsgrid here")
    console.log(cellsgrid)
 
    console.log("players resetRes");
  
    // const playerTurn = (pl) => {
    //   if(player === "X") {
    //     playerTurnArr.push(player)
    //   } else {
    //     playerTurnArr.push(player)
    //   }
    //   return playerTurnArr
    // }
    // let plScorePlayer1
    let statusWin;
    // put check inplay in here
    const WinPlayerTurn = (pl) => { 
      if(player === "X") {
        pl1Score
        statusWin = <p>Player {winResult} is a winner and the score is: {playerScorePl1}</p>
      } else if(player === "O" && winResult){
        
        statusWin = <p>Player {winResult} is a winner and the score is: {}</p>
      } else if(!player === "O" && !player === "X"){
        statusWin = <p>It is a draw!</p>  
     
      } else {
        statusWin = <p>To play</p>
      }
      return statusWin
    }

    let status
    // null in gameStatus
    const gameStatus = (pl, check) => {
      console.log("This is statusWin")
     
      // checks the cell for an empty string
      check = resetCells.some((cell) => cell.value !== "")
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