import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PersonList = (props) => {
  const { people, setPeople } = props

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
          <Link to={`/people/edit/${person._id}`}>Edit</Link>
        </p>
      ) }
    </div>
  )
}

export default PersonList