import React from 'react'
import AuthorForm from '../components/AuthorForm'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


const AuthorUpdate = () => {
  const { id } = useParams()
  const [author, setAuthor] = useState({})
  const [loaded, setLoaded] = useState(false)
  const navigate = useNavigate()
  const [validationErrors, setValidationErrors] = useState({})
  
  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors/${id}`)
      .then(res => {
        setAuthor(res.data)
        setLoaded(true)
      })
      .catch(err => console.log(err))
  },[])

  const updateAuthor = author => {
    axios.put(`http://localhost:8000/api/authors/${author._id}`, author)
      .then(res => {
        console.log(res.data)
        navigate('/')
      })
      .catch(err => setValidationErrors(err.response.data.errors))
  }

  return (
    <div className='container'>
      <h2>Favorite Authors</h2>
      <Link to="/">Home</Link>
      <p>Edit this author</p>
      { loaded && <AuthorForm author={author} setAuthor={setAuthor} onSubmitProp={updateAuthor} validationErrors={validationErrors} /> }
    </div>
  )
}

export default AuthorUpdate