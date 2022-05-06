import React from 'react'

const PersonCard = (props) => {
  return (
    <>
      <h2>{lastName}, {firstName}</h2>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
    </>
  )
}

export default PersonCard