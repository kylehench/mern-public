import React, { useState } from 'react'
import axios from 'axios'

const PersonForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  // handler when the form is submitted
  const onSubmitHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/people', {
      firstName,
      lastName
    })
      .then( res => {
        console.log(res)
        console.log(res.data)
      })
      .catch( err => console.log(err))
  }

  return (
    <form onSubmit={onSubmitHandler} className='form'>
      <p>
        <label>First Name</label>
        <input type="text" onChange={(e) => setFirstName(e.target.value)} className="form-control mb-2"/>
        <label>Last Name</label>
        <input type="text" onChange={(e) => setLastName(e.target.value)} className="form-control mb-2"/>
      </p>
      <input type="submit" className="btn btn-primary" />
    </form>
  )
}
export default PersonForm