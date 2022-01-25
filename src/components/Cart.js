import React, { useEffect } from 'react';
import { useContext } from 'react/cjs/react.development';
import cartContext from '../context/cart/cartContext'
import Cartitem from './Cartitem'

const Cart = (props) => {
    const context = useContext(cartContext)
    const { cart, getCart } = context;

    useEffect(() => {
        getCart()
    }, [])

    return <div>`
        <div className="container">
                    {cart.length === 0 && 'No Carts to Display'}
                </div>`
        {cart.map((cart) => {
            return <Cartitem key={cart._id} cart={cart} showAlert={props.showAlert} />
        })}
    </div>
};

export default Cart;
