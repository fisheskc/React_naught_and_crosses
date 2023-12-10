
// iterates over the cellgrid which stores the player's selection

// const [selectedCells, setSelectedCells] = useState(allCellSpaces)

const WinGamePatt = (cells) => {

    let winningPatterns = [
        [1, 5, 9],
        [1, 2, 3],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [3, 5, 7],
        [4, 5, 6],
        [7, 8, 9]
    ];
 
    for(let i = 0; i < winningPatterns.length; i++) {
      const [a,b,c] = winningPatterns[i];
        
        if( cells[a-1].value === cells[b-1].value && cells[a-1].value === cells[c-1].value) {
          let winner = cells[a-1].value
        // console.log("This is the return value of cells[a-1].value");
        // return `Player has won this game.`
        // console.log(winner);
        return winner
      }
    }
      return null;
}

export default WinGamePatt;