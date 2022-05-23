import React from 'react'
import { useParams } from 'react-router-dom'

const Echo = (props) => {
  const { string } = useParams()

  return (
    <h2 className='mt-3 text-center'>The { isNaN(string) ? 'word' : 'number' } is: { string }</h2>
  )
}

export default Echo