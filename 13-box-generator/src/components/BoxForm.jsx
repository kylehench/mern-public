import React, { useState } from 'react'

const BoxForm = (props) => {
  const [color, setColor] = useState('')
  const [size, setSize] = useState(100)
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addColor({
      color: color,
      size: size + 'px'
    })
    setColor('')
    setSize(100)
  }

  return (
    <form
      className='mt-4'
      onSubmit={ handleSubmit }>
      <label>Color:</label>
      <input
        type="text"
        className="form-control mb-2"
        value={color}
        onChange={ (e) => setColor(e.target.value) }></input>
      <label>Height and width in pixels:</label>
      <input
        type="text"
        className="form-control mb-2"
        value={size}
        onChange={ (e) => setSize(e.target.value) }></input>
      <input type="submit" value="Add" className="btn btn-primary" />
    </form>
  )
}

export default BoxForm