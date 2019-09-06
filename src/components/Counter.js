import React from 'react'

export default (props) => 
    <div>
        <h1>{props.value}</h1>
        <button onClick={props.onIncrement}>+</button>
        <button onClick={props.onDecrement}>-</button>
    </div>
