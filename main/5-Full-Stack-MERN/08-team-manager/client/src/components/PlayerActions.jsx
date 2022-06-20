import React from 'react'
import { useState } from 'react'

const PlayerActions = (props) => {
  const { status, toggleStatus } = props
  
  return (
    <div>
      <button 
        className={`btn btn-outline-success ${status==='playing' && 'active'}`}
        onClick={() => toggleStatus('playing')}
      >
        Playing
      </button>
      <button 
        className={`btn btn-outline-danger mx-2 ${status==='notPlaying' && 'active'}`}
        onClick={() => toggleStatus('notPlaying')}
      >
        Not Playing
      </button>
      <button 
        className={`btn btn-outline-warning ${status==='undecided' && 'active'}`}
        onClick={() => toggleStatus('undecided')}
      >
        Undecided
      </button>
    </div>
  )
}

export default PlayerActions