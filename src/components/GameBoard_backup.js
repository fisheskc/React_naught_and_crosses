import React, {Fragment} from 'react'
import Cell from './Cell';

import classes from './Style.module.css'

const GameBoard = (props) => {
  
  // const [score, setScore] = React.useState("");
  const player = props.player;
  const setPlayer = props.setPlayer;
  const cells = props.cells;
  const setCells = props.setCells;


  function clickCell(e) {
    // console.log("Clicked here")
    let cellNumber = e.target.dataset.number
    // console.log(cellNumber)
    

    // prevents the player from clicking on the cell already in play
    // explicit value of empty string - test for Boolean value of true or false
    if (cells[cellNumber-1].value !== "") {return null}

    let displayValue = player
    // let newPlayer = player
    
    let newPlayer = (player === 'X') ? 'O' : 'X'
    // console.log("This is cell id")

    let newCells = [...cells]
    newCells[cellNumber-1].value = displayValue
 

    setCells(newCells)
    console.log(`This is setPlayer(newPlayer)`)
  // console.log(setPlayer(newPlayer)) 

   setPlayer(newPlayer)
    // this sets the alternative player on the game cellGrid
    // uses state on line 24
    
  }

 
    // renders every cell on the gameBoard
    const cellElements = () => {
    console.log("This is cellElements")
    console.log(cells)
      return cells.map((cell)=> (  
      <Cell
        key={cell.id} 
        id={cell.id}
        clickCell={clickCell}
        value = {cell.value}
        
        />
      ))
    }
    return (
      <Fragment>
        <div>
          <h3>Hello from game Board</h3>
        </div>
        <div className={classes.container}>
            {cellElements()}  
        </div>
        
      </Fragment>
    ) 
}
export default GameBoard;





























