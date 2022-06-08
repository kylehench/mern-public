import React, { useState } from 'react'
import axios from 'axios'
import PersonForm from '../components/PersonForm'
import PersonList from '../components/PersonList'

const Main = (props) => {
  const [people, setPeople] = useState([])

  const removeFromDom = personId => setPeople(people.filter(person => person._id != personId))

  return (
    <div>
      <PersonForm people={people} setPeople={setPeople} />
      <hr />
      <PersonList people={people} setPeople={setPeople} removeFromDom={removeFromDom} />
    </div>
  )
}

export default Main