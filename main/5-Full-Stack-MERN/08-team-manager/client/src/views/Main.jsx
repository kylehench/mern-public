import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Main = () => {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8000/api/players`)
      .then(res => {
        console.log('get all players request')
        setPlayers(res.data)
      })
      .catch(err => console.log(err))
  },[])

  const deletePlayer = id => {
    axios.delete(`http://localhost:8000/api/players/${id}`)
      .then(() => setPlayers(players.filter(player => player._id !== id)))
      .catch(err => console.log(err))
  }
  
  return (
    <div className='container mt-2'>
      <b><Link to='/'>Manage Players</Link></b>&nbsp;|&nbsp;
      <Link to='/status/game/1'>Manage Player Status</Link>
      <div className="card mt-3">
        <div className="card-body">
          <b><Link to='/'>List</Link></b>&nbsp;|&nbsp;
          <Link to='/players/new'>Add Player</Link>
          <table className='table table-hover mt-2'>
            <tbody>
              <tr>
                <th>Player Name</th>
                <th>Preferred Position</th>
                <th>Actions</th>
              </tr>
              { players
                .sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1:-1)
                .map((player, index) =>
                  <tr key={index}>
                    <td>{player.name}</td>
                    <td>{player.preferredPosition}</td>
                    <td>
                      <button onClick={() => deletePlayer(player._id)} className='btn btn-danger ms-1 btn-sm'>Delete</button>
                    </td>
                  </tr>
              ) }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Main