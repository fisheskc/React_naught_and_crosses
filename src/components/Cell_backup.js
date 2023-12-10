import classes from './Style.module.css'


import React from 'react'

const Cell = (props) => {
   
    return (
        <div
            className={classes.cell}
            key = {props.id}
            data-number={props.id}
            onClick={props.clickCell}
            >
            {props.value}
          
        </div>
    )
}

export default Cell;