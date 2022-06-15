import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const PlayerCreate = () => {
  const [player, setPlayer] = useState({name: '', preferredPosition: ''})
  const navigate = useNavigate()
  const [validationErrors, setValidationErrors] = useState({})
  
  const onSubmitHandler = e => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/players/', player)
      .then(res => navigate('/'))
      .catch(err => setValidationErrors(err.response.data.errors))
  }
  
  return (
    <div className='container mt-2'>
      <b><Link to='/'>Manage Players</Link></b>&nbsp;|&nbsp;
      <Link to='/status/game/1'>Manage Player Status</Link>
      <div className="card mt-3">
        <div className="card-body">
          <Link to='/'>List</Link>&nbsp;|&nbsp;
          <b><Link to='/players/new'>Add Player</Link></b>
          <form onSubmit={onSubmitHandler} className="mt-2">
            <label>Player Name:</label>
            { validationErrors.name && <p className='text-danger'>{validationErrors.name.message}</p> }
            <input type="text" value={player.name} onChange={e => {
              setPlayer({...player, name: e.target.value})
              if (e.target.value.length>1) {
                setValidationErrors({})
              } else {
                setValidationErrors({name: {message: 'Name must be at least 2 characters long.'}})
              }
            }} className="form-control mb-2" />
            <label>Preferred Position:</label>
            <input type="text" value={player.preferredPosition} onChange={e => setPlayer({...player, preferredPosition: e.target.value})} className="form-control mb-2" />
            <input type="submit" value="Add Player" className='btn btn-success' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default PlayerCreate