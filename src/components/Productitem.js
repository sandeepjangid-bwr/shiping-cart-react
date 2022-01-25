import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import productContext from "../context/product/productContext"
import cartsContext from "../context/cart/cartContext"


const Productitem = (props) => {
    const context = useContext(productContext)
    const { deleteProduct } = context

    const cartContext = useContext(cartsContext)
    const { addToCart } = cartContext

    const handleClick = (ev) => {
        ev.preventDefault();
        addToCart(product._id, product.productname, product.price)
        showAlert("Product Added to Cart Successfully", "success");
    }

    const { product, updateProduct, showAlert } = props;
    return (
        <div className='col-md-3 my-2'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{product.productname}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text"><i className="fas fa-rupee-sign mx-1"></i>{product.price}</p>
                    <div className="f-flex my-2">
                        <Link to="/" className="btn btn-primary" onClick={handleClick}>Add to Cart</Link>
                        <i className="fas fa-trash-alt mx-2" onClick={() => { deleteProduct(product._id); showAlert("Product Deleted Successfully", "success"); }}></i>
                        <i className="fas fa-edit mx-2" onClick={() => { updateProduct(product) }}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productitem
