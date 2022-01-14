import React, { useContext, useState } from 'react'
import productContext from "../context/productContext"

const Addproduct = () => {
    const context = useContext(productContext)
    const { addProduct } = context;

    const [product, setProduct] = useState({ productname: "", description: "", price: "" })

    const handleClick = (ev) => {
        ev.preventDefault();
        addProduct(product.productname, product.description, product.price);
    }

    const onChange = (ev) => {
        setProduct({ ...product, [ev.target.name]: ev.target.value  })
    }
    return (
        <div className='container'>
            <form onSubmit={handleClick}>
                <div className="mb-3">
                    <label htmlFor="productname" className="form-label">Enter Product Name</label>
                    <input type="text" className="form-control" id="productname" name='productname' onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Enter Product Description</label>
                    <input type="text" className="form-control" id="description" name='description' onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Enter Product Price</label>
                    <input type="text" className="form-control" id="price" name='price' onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </div>
    )
}

export default Addproduct
