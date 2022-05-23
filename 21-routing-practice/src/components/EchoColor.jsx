import React from 'react'
import { useParams } from 'react-router-dom'

const EchoColor = (props) => {
  const { text, textColor, backgroundColor } = useParams()

  const wrapperStyle = {
    color: textColor,
    backgroundColor: backgroundColor,
  }

  return (
      <h2 className='mt-3 py-4 text-center' style={ wrapperStyle }>{text}</h2>
  )
}

export default EchoColor