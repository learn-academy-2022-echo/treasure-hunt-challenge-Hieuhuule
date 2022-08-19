import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {

  const [board, setBoard] = useState(["?", "?", "?", "?", "?", "?", "?", "?", "?"])

  const handleGamePlay = (index) => {
    if (board[index] === "?" ) {
      board[index] = "X"
      setBoard([board]) // problem line
      alert(board)

    }
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className='boardgame'>
        {board.map((value, index) => {
          return (
            <Square 
              value={value} 
              index={index} 
              handleGamePlay={handleGamePlay} />
          )
        })}
      </div>
    </>
  )
}
export default App