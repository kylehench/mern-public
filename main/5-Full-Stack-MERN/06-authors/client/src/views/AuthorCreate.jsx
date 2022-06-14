import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthorForm from '../components/AuthorForm'

const AuthorCreate = () => {
  const [author, setAuthor] = useState({name: ''})
  const navigate = useNavigate()
  const [validationErrors, setValidationErrors] = useState({})

  const createAuthor = author => {
    axios.post('http://localhost:8000/api/authors/', author)
      .then(res => navigate('/'))
      .catch(err => setValidationErrors(err.response.data.errors))
  }
  
  return (
    <div className='container'>
      <h2>Favorite Authors</h2>
      <Link to='/'>Home</Link>
      <p>Add a new author:</p>
      <AuthorForm author={author} setAuthor={setAuthor} onSubmitProp={createAuthor} validationErrors={validationErrors} />
    </div>
  )
}

export default AuthorCreate