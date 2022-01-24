import React, { useEffect } from 'react';
import { useContext } from 'react/cjs/react.development';
import cartContext from '../context/cart/cartContext'
import Cartitem from './Cartitem'

const Cart = () => {
    const context = useContext(cartContext)
    const { cart, getCart } = context;

    useEffect(() => {
        getCart()
    }, [])

    return <div>
        {cart.map((cart) => {
            return <Cartitem key={cart._id} cart={cart} />
        })}
    </div>
};

export default Cart;
