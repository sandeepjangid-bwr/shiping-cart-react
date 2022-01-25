import React, { useContext, useEffect, useRef, useState } from 'react'
import productContext from "../context/product/productContext"
import Productitem from './Productitem'

const Products = (props) => {
    const context = useContext(productContext)
    const { product, getProduct, editProduct } = context
    const { showAlert } = props

    useEffect(() => {
        getProduct()
    }, [])

    const ref = useRef(null)
    const refClose = useRef(null)

    const [products, setProducts] = useState({ id: "", uproductname: "", udescription: "", uprice: "" })

    const updateProduct = (cproduct) => {
        ref.current.click();
        setProducts({ id: cproduct._id, uproductname: cproduct.productname, udescription: cproduct.description, uprice: cproduct.price });
    }

    const handleClick = (ev) => {
        editProduct(products.id, products.uproductname, products.udescription, products.uprice);
        refClose.current.click();
        props.showAlert("Product Updated Successfully", "success");
    }

    const onChange = (ev) => {
        setProducts({ ...products, [ev.target.name]: ev.target.value });
    }

    return (
        <>
            {/* Button trigger modal */}
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleClick}>
                                <div className="mb-3">
                                    <label htmlFor="productname" className="form-label">Enter Product Name</label>
                                    <input type="text" className="form-control" id="uproductname" name='uproductname' value={products.uproductname} onChange={onChange} aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Enter Product Description</label>
                                    <input type="text" className="form-control" id="udescription" name='udescription' value={products.udescription} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Enter Product Price</label>
                                    <input type="text" className="form-control" id="uprice" name='uprice' value={products.uprice} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick} disabled={products.uproductname.length < 6 || products.udescription.length < 6}>Update Product</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row my-3'>
                <h2>All Products</h2>
                <div className="container">
                    {product.length === 0 && 'No Products to Display'}
                </div>
                {product.map((product) => {
                    return <Productitem key={product._id} product={product} updateProduct={updateProduct} showAlert={showAlert} />
                })}
            </div>
        </>
    )
}

export default Products
