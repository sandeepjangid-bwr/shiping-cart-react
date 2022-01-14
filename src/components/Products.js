import React, { useContext } from 'react'
import productContext from "../context/productContext"
import Addproduct from './Addproduct'
import Productitem from './Productitem'

const Products = () => {
    const context = useContext(productContext)
    const { product, addProduct } = context
    return (
        <>
            <Addproduct />
            <div className='row my-3'>
                <h2>All Products</h2>
                {product.map((product) => {
                    return <Productitem key={product._id} product={product} />
                })}
            </div>
        </>
    )
}

export default Products
