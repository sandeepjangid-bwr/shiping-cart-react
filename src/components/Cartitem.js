import React, { useContext } from 'react';
import cartContext from '../context/cart/cartContext'

const Cartitem = (props) => {
  const context = useContext(cartContext)
  const { deleteCart } = context

  const { cart } = props

  return (
    <div className='container my-4'>
      <div className="card width70">
        <div className="card-body">
          <h5 className="card-title">{cart.product_name}</h5>
          <p className="card-text"><i className="fas fa-rupee-sign mx-1" />{cart.price}</p>
          <i className="fas fa-trash-alt mx-2" onClick={() => { deleteCart(cart._id) }}></i>
        </div>
      </div>
    </div>
  )
}

export default Cartitem;
