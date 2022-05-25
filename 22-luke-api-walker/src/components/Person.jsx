import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Person = (props) => {
  const { id } = useParams()
  const [person, setPerson] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://swapi.dev/api/people/' + id)
      .then(response => response.json())
      .then(response => {
        if (response.detail==='Not found') {
          setError(true)
        } else {
          setError(false)
          setPerson(response)
        }
      })
  }, [id])

  return (
    <div className='container'>
      {( () => {
        if (error) { return (
          <>
            <p>"These aren't the droids you're looking for"</p>
            <img src="/images/obiWan.jpg" style={{height:"200px"}} alt="obi-wan" />
          </>
        )} else if (Object.keys(person).length===0) { return (
          <p>Loading...</p>
        )} else { return (
          <>
            <h2>{ person.name }</h2>
            <p>
              <b>Height:</b> { person.height } cm <br/>
              <b>Mass:</b> { person.mass } kg <br/>
              <b>Eye color:</b> { person.eye_color }<br/>
              <b>Skin color:</b> { person.skin_color }
            </p>
          </>
        )}
      })()}
      
    </div>
  )
}

export default Person