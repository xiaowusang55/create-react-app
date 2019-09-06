// import React from 'react'
// import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import counter from './reducers/counter'




const store = createStore(counter);


const render = () => {
    document.body.innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', () => store.dispatch({ type: 'INCREMENT'}));








// const render = () => ReactDOM.render(
//   <Counter
//     value={store.getState()}
//     onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
//     onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
//   />,
//   document.getElementById('root')
// )

// render()
// store.subscribe(render)
