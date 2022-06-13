import React, { useState } from 'react'
import ProductForm from '../components/ProductForm';
import Products from '../components/Products';

const Main = () => {
  const [products, setProducts] = useState([])

  const removeFromDom = id => setProducts(products.filter(product => id !== product._id))
  
  return (
    <div className="container mt-3">
      <ProductForm products={products} setProducts={setProducts} />
      <hr />
      <Products products={products} setProducts={setProducts} removeFromDom={removeFromDom} />
    </div>
  )
}

export default Main