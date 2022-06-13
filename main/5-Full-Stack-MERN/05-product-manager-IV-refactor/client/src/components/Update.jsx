import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Update = (props) => {
  const { products, setProducts } = props
  const [product, setProduct] = useState({title:'', price: '', description: ''})
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  },[])

  const onSubmitHandler = e => {
    e.preventDefault()
    axios.put(`http://localhost:8000/api/products/${id}`, {
      title: product.title,
      price: product.price,
      description: product.description,
    })
      .then( res => {
        console.log(res)
        console.log(res.data)
        navigate('/')
      })
      .catch( err => console.log(err))
  }

  return (
    <div className='container mt-3'>
      <form onSubmit={onSubmitHandler}>
        <h2>Edit Product</h2>
        <label>Title:</label>
        <input type="text" value={product.title} onChange={(e) => setProduct({...product, title: e.target.value})} className="form-control mb-2"/>
        <label>Price:</label>
        <input type="text" value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})} className="form-control mb-2"/>
        <label>Description:</label>
        <input type="text" value={product.description} onChange={(e) => setProduct({...product, description: e.target.value})} className="form-control mb-2"/>
        <input type="submit" value="Edit" className="btn btn-primary" />
      </form>
    </div>
  )
}

export default Update