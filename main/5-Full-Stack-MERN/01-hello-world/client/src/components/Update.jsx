import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Update = (props) => {
  const navigate = useNavigate()
  const [person, setPerson] = useState({ firstName: 'Loading...', lastName: 'Loading...' })
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/people/${id}`)
    .then(res => {
      setPerson(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  // handler when the form is submitted
  const onSubmitHandler = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:8000/api/people/${id}`, {
      firstName: person.firstName,
      lastName: person.lastName
    })
      .then( res => {
        console.log(res)
        console.log(res.data)
        navigate('/home')
      })
      .catch( err => console.log(err))
  }

  return (
    <form onSubmit={onSubmitHandler} className='form'>
      <h2>Update Person</h2>
      <p>
        <label>First Name:</label>
        <input type="text" value={person.firstName} onChange={(e) => setPerson({...person, firstName: e.target.value})} className="form-control mb-2"/>
        <label>Last Name:</label>
        <input type="text" value={person.lastName} onChange={(e) => setPerson({...person, lastName: e.target.value})} className="form-control mb-2"/>
      </p>
      <input type="submit" className="btn btn-primary" />
    </form>
  )
}
export default Update