import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PersonList = (props) => {
  const { removeFromDom, people, setPeople } = props

  const deletePerson = (personId) => {
    axios.delete(`http://localhost:8000/api/people/${personId}`)
      .then(res => removeFromDom(personId))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/people')
      .then((res) => {
        console.log(res.data)
        setPeople(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      { people.map((person, index) => 
        <p key={index}>{person.lastName}, {person.firstName}<br />
          <Link to={`/people/${person._id}`}>{person.firstName}'s Page</Link>&nbsp;|&nbsp;
          <Link to={`/people/edit/${person._id}`}>Edit</Link>&nbsp;|&nbsp;
          <a href="#" onClick={e => deletePerson(person._id)}>Delete</a>
        </p>
      ) }
    </div>
  )
}

export default PersonList