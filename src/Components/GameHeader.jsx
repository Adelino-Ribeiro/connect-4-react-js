import React from 'react'

const GameHeader = ({player}) => {
  return (
    <div className='panel header'>
      <div className="header-text">Player {player} turn</div>
    </div>
  )
}

export default GameHeader
