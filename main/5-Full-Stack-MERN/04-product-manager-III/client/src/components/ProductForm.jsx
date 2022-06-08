import React, { useState } from 'react'
import axios from 'axios'

const ProductForm = (props) => {
  const { products, setProducts } = props
  const [product, setProduct] = useState({})

  const onSubmitHandler = e => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/products', {
      title: product.title,
      price: product.price,
      description: product.description,
    })
      .then( res => {
        console.log(res)
        console.log(res.data)
        setProducts([...products, res.data])
      })
      .catch( err => console.log(err))
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <h2>Create Product</h2>
      <label>Title:</label>
      <input type="text" onChange={(e) => setProduct({...product, title: e.target.value})} className="form-control mb-2"/>
      <label>Price:</label>
      <input type="text" onChange={(e) => setProduct({...product, price: e.target.value})} className="form-control mb-2"/>
      <label>Description:</label>
      <input type="text" onChange={(e) => setProduct({...product, description: e.target.value})} className="form-control mb-2"/>
      <input type="submit" value="Create" className="btn btn-primary" />
    </form>
  )
}

export default ProductForm