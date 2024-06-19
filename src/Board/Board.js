import {useState} from 'react';


function Board(){

    const [squares, setSquares] = useState(Array(9).fill(null));   
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(squares);
    let status;

    if(winner) { 
        status = "Winner:  " + winner;
    }else{
        status = "Next player is " + (xIsNext? "X" : "O"); 
    }

    function handleClick(i) {

        if( squares[i] || calculateWinner(squares) ) return;

        const nextSquares = squares.slice();
        
        nextSquares[i] = xIsNext ? 'X' : 'O';
        setXIsNext(!xIsNext);
        setSquares(nextSquares)
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <div><Square value={squares[0]} onSquareClick={ () => handleClick(0) }/></div>
                <div><Square value={squares[1]} onSquareClick={ () => handleClick(1) }/></div>
                <div><Square value={squares[2]} onSquareClick={ () => handleClick(2) }/></div>
            </div>
            <div className="board-row">
                <div><Square value={squares[3]} onSquareClick={ () => handleClick(3) }/></div>
                <div><Square value={squares[4]} onSquareClick={ () => handleClick(4) }/></div>
                <div><Square value={squares[5]} onSquareClick={ () => handleClick(5) }/></div>
           </div>
           <div className="board-row">
                <div><Square value={squares[6]} onSquareClick={ () => handleClick(6) }/></div>
                <div><Square value={squares[7]} onSquareClick={ () => handleClick(7) }/></div>
                <div><Square value={squares[8]} onSquareClick={ () => handleClick(8) }/></div>
            </div>

        </>
    );
}


function Square({value, onSquareClick}){
    return <button className="square" onClick={onSquareClick}>{value}</button>;
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


export default Board;
