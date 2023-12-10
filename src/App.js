import React from 'react'

// import GamePlay from './components/GamePlay';
// import GameBoard from './components/GameBoard';
import Players from './components/Players';
// import Cell from './components/Cell';

export default function App(props) {
	
    

    const player = props.player;
    const setPlayer = props.setPlayer;
    const cells = props.cells;
    const setCells = props.setCells;
    // const setScore = props.setScore

  

    // players to be reset
	return (
        <main>
			<h1>Knots and Crosses</h1>
			
			<Players 
                
            />
			
        </main>
    )

};
