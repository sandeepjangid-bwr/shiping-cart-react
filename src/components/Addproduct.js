import React, { useContext, useState } from 'react'
import productContext from "../context/product/productContext"

const Addproduct = (props) => {
    const context = useContext(productContext)
    const { addProduct } = context;

    const [product, setProduct] = useState({ productname: "", description: "", price: "" })

    const handleClick = (ev) => {
        ev.preventDefault();
        addProduct(product.productname, product.description, product.price);
        props.showAlert("Product added Successfully", "success")
        setProduct({ productname: "", description: "", price: "" });
    }

    const onChange = (ev) => {
        setProduct({ ...product, [ev.target.name]: ev.target.value })
    }
    return (
        <div className='container my-4'>
            <h2>Adding a Product</h2>
            <form onSubmit={handleClick} className='my-4'>
                <div className="mb-3">
                    <label htmlFor="productname" className="form-label">Enter Product Name</label>
                    <input type="text" className="form-control" id="productname" name='productname' value={product.productname} onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Enter Product Description</label>
                    <input type="text" className="form-control" id="description" name='description' value={product.description} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Enter Product Price</label>
                    <input type="text" className="form-control" id="price" name='price' value={product.price} onChange={onChange} />
                </div>
                <button disabled={product.productname.length < 6 || product.description.length < 6} type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </div>
    )
}

export default Addproduct
