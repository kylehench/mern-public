import React from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import PlayerActions from '../components/PlayerActions'

const PlayerStatus = () => {
  const [players, setPlayers] = useState([])
  const { gameId } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/players`)
      .then(res => {
        console.log('get all players request')
        setPlayers(res.data)
      })
      .catch(err => console.log(err))
  },[])

  const toggleStatus = (player, status) => {
    axios.get(`http://localhost:8000/api/players/${player._id}/games/${gameId}/status/${status}`)
      .then(res => {
        const newPlayers = [...players]
        newPlayers[newPlayers.findIndex(item => item._id===player._id)] = res.data
        setPlayers(newPlayers)
    })    
  }

  const returnStatus = (player) => {
    const gameStatusObj = player.gameStatuses.filter(status => status.game === parseInt(gameId))[0]
    if (gameStatusObj===undefined) return 'undecided'
    return gameStatusObj.status
  }
  
  return (
    <div className='container mt-2'>
      <Link to='/'>Manage Players</Link>&nbsp;|&nbsp;
      <b><Link to='/status/game/1'>Manage Player Status</Link></b>
      <div className="card mt-3">
        <div className="card-body">
          <h1>Player Status - Game {gameId}</h1>
          <div className="d-flex justify-content-center">
            <Link className={parseInt(gameId)===1 ? 'fw-bold' : ''} to='/status/game/1'>Game 1</Link>&nbsp;|&nbsp;
            <Link className={parseInt(gameId)===2 ? 'fw-bold' : ''} to='/status/game/2'>Game 2</Link>&nbsp;|&nbsp;
            <Link className={parseInt(gameId)===3 ? 'fw-bold' : ''} to='/status/game/3'>Game 3</Link>&nbsp;|&nbsp;
          </div>
          <table className='table mt-2'>
            <tbody>
              <tr>
                <th>Player Name</th>
                <th>Actions</th>
              </tr>
              { players.map((player, index) =>
                  <tr key={index}>
                    <td>{player.name}</td>
                    <td>
                      <PlayerActions status={returnStatus(player)} toggleStatus={(status) => toggleStatus(player, status)} />
                    </td>
                  </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default PlayerStatus