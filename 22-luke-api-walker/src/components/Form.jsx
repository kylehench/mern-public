import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Form = () => {
  const navigate = useNavigate()

  const [id, setId] = useState()
  const [category, setCategory] = useState()

  const handleFormSubmit = (e) => {
    e.preventDefault()
    switch (category) {
      case 'people':
        navigate('/people/' + id)
        break;
      case 'planets':
        navigate('/planets/' + id)
        break;
      default:
        break;
    }
  }
  
  return (
    <div className="App">
      <form onSubmit={ handleFormSubmit } className="container d-flex form-inline align-items-center" style={{width:'720px'}}>
        <label htmlFor="category" className='me-2'>Search for:</label>
        <select name="category" className="form-select me-4 my-2" style={{width:'220px'}} onChange={ e => setCategory(e.target.value) }>
          <option value="none" defaultValue hidden>--- Select an Option ---</option>
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
        <label htmlFor="id" className='me-2'>ID:</label>
        <input onChange={ e => setId(e.target.value) } type="number" className="form-control me-4" name="id" min="1" style={{width:'70px'}} />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
    </div>
  )
}

export default Form