import React, { useState } from 'react'

const PersonCard = (props) => {
  const [age, setAge] = useState(props.age)
  const addYear = () => setAge(age+1)
  return (
    <div className='border border-primary rounded p-3 m-2'>
      <h2>{props.lastName}, {props.firstName}</h2>
      <p>Age: {age}</p>
      <p>Hair Color: {props.hairColor}</p>
      <button onClick={() => addYear()} className="btn btn-primary">Birthday Button for {props.firstName} {props.lastName}</button>
    </div>
  )
}

export default PersonCard