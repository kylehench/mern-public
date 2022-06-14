import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Main = () => {
  const [authors, setAuthors] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors`)
      .then(res => {
        setAuthors(res.data)
      })
      .catch(err => console.log(err))
  },[])

  const deleteAuthor = id => {
    axios.delete(`http://localhost:8000/api/authors/${id}`)
      .then(() => setAuthors(authors.filter(author => author._id !== id)))
      .catch(err => console.log(err))
  }
  
  return (
    <div className='container'>
      <h2>Favorite Authors</h2>
      <Link to='/authors/new'>Add an author</Link>
      <table className='table table-hover'>
        <tbody>
          <tr>
            <th>Author</th>
            <th>Actions available</th>
          </tr>
          { authors.map((author, index) =>
            <tr key={index}>
              <td>{author.name}</td>
              <td>
                <button onClick={() => navigate(`/authors/${author._id}`)} className='btn btn-secondary ms-1 btn-sm'>Edit</button>
                <button onClick={() => deleteAuthor(author._id)} className='btn btn-danger ms-1 btn-sm'>Delete</button>
              </td>
            </tr>
          ) }
        </tbody>
      </table>
    </div>
  )
}

export default Main