import React from 'react'


const GamePlay = (props) => {
    // const [gameStarted, setGameStarted] = useState(false);
      const resetGamePlay = props.resetGamePlay;
     
   
    let resetPlay = () => (
          <button  onClick={() => resetGamePlay()}>Reset Game</button>
       
      ) 
    
      return (
        <div className="state--title">
            {resetPlay()} 
        </div>

    )
      
}

export default GamePlay;