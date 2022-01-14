import React from 'react'
import { Link } from 'react-router-dom';

const Productitem = (props) => {
    const { product } = props;
    return (
        <div className='col-md-3 my-2'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{product.productname}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text"><i className="fas fa-rupee-sign mx-1"></i>{product.price}</p>
                    <Link to="/" className="btn btn-primary">Add to Cart</Link>
                </div>
            </div>
        </div>
    )
}

export default Productitem
