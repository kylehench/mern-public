import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Planet = (props) => {
  const { id } = useParams()
  const [planet, setPlanet] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/' + id)
      .then(response => response.json())
      .then(response => {
        if (response.detail==='Not found') {
          setError(true)
        } else {
          setError(false)
          setPlanet(response)
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
        )} else if (Object.keys(planet).length===0) { return (
          <p>Loading...</p>
        )} else { return (
          <>
            <h2>{ planet.name }</h2>
            <p>
              <b>Diameter:</b> { planet.diameter } km <br/>
              <b>Gravity:</b> { planet.gravity } <br/>
              <b>Terrain:</b> { planet.terrain }<br/>
              <b>Population:</b> { planet.population } people
            </p>
          </>
        )}
      })()}
    </div>
  )
}

export default Planet