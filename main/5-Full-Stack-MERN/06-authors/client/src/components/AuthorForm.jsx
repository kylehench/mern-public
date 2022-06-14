import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthorForm = (props) => {
  const { author, setAuthor, onSubmitProp, validationErrors } = props
  const navigate = useNavigate()

  const onSubmitHandler = e => {
    e.preventDefault()
    onSubmitProp(author)
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <label>Name:</label>
      { validationErrors.name && <p className='text-danger'>{validationErrors.name.message}</p> }
      <input type="text" value={author.name} onChange={e => setAuthor({...author, name: e.target.value})} className="form-control mb-2" />
      <input type="submit" className='btn btn-primary' />
      <button onClick={() => navigate('/')} className='btn btn-secondary ms-1'>Cancel</button>
    </form>
  )
}

export default AuthorForm