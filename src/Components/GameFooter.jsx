import React from 'react'

const GameFooter = ({onclickEvent}) => {
  return (
    <div className='panel footer'>
      <button onClick={onclickEvent}>New Game</button>
    </div>
  )
}

export default GameFooter
