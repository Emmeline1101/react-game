import {useState} from 'react';
/*
* The code follows the instructions from REACT Official Document
* https://legacy.reactjs.org/tutorial/tutorial.html
* https://zh-hans.react.dev/learn/tutorial-tic-tac-toe
*/
/*
 * Square function
 * 1. `export` indicates that this function can be used outside this file
 * 2. `default` indicates that this function is the main function of this file
*/
export default function Board() {
  
  const[xIsNext, setXIsNext] = useState(true);
  //squares is a variable to store value, setSquares is a function to update the value
  // use state can remember the value
  const [squares, setSquares] = useState(Array(9).fill(null)); //initialize an array and assign the value to the state variable, `squares`
   /*1. keyword `return` will return the following info to the caller
   * 2. <button> is a JSX element, --> JSX = HTML + JS
   * 3. className="square"> is an attribute of button, which will decide how CSS will design the style
   * 4. `X` is the text shown in the button
   * 5. </button> --> a close tag
   * 6. The react return can only return one element. 
   * Wrong:   return <button className="square">X</button><button className="square">X</button>;
   * Correct: use <> </>  () to wrap
   * 7. use <div> to change the position！！！！！！
   */
  //<Square value = "1" /> 
  function handleClick(i){
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    // Create a copy of the squares array to ensure immutability
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className = "board-row"> 
        <Square value = {squares[0]} onSquareClick={() => handleClick(0) } /> 
        <Square value = {squares[1]} onSquareClick={() => handleClick(1) } />
        <Square value = {squares[2]} onSquareClick={() => handleClick(2) } />
      </div>
      <div className = "board-row">
        <Square value = {squares[3]} onSquareClick={() => handleClick(3) } />  
        <Square value = {squares[4]} onSquareClick={() => handleClick(4) } />
        <Square value = {squares[5]} onSquareClick={() => handleClick(5) } />
      </div>
      <div className = "board-row"> 
        <Square value = {squares[6]} onSquareClick={() => handleClick(6) } />
        <Square value = {squares[7]} onSquareClick={() => handleClick(7) } />
        <Square value = {squares[8]} onSquareClick={() => handleClick(8) } />
      </div>
    </>
      
  );
  
  
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
/*
* 1. to avoid redundancy, here the `Square` component is created
* 2. To update the value, we have to pass the {value} from parent component (Board) to child component (Square)
*/
//function Square({value})
 // don't forget to add {}
function Square({value, onSquareClick}){

  /*
  *  Before the X value will be passed to 'Square' function, but now it will be added by `handleClick` function
  */

  // const [value, setValue] = useState(null);

  // function handleClick(){
  //   console.log("clicked!");
  //   setValue('X');
  // }
  // return (
  //   <button 
  //   className= "square" 
  //   onClick={handleClick}
  // >
  //     {value}
  //   </button> 
  // );
 
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  
  );
}
