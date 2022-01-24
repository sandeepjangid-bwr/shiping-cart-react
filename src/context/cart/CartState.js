import React, { useState } from 'react';
import cartContext from './cartContext'

const CartState = (props) => {
    const host = "http://localhost:5000"
    const carts = []

    const [cart, setCart] = useState(carts);

    const getCart = async () => {
        const response = await fetch(`${host}/api/cart/cartitem`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });

        const cartItems = await response.json();
        setCart(cartItems);
    }

    const addToCart = async (id, productname, price) => {
        const response = await fetch(`${host}/api/cart/addcart/${id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ productname, price })
        })

        const json = await response.json();
        setCart(cart.concat(json))
    }

    const deleteCart = async (id) => {
        const response = await fetch(`${host}/api/cart/deletecartitem/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        })

        const newCart = cart.filter((cart) => { return cart._id !== id })

        setCart(newCart);
    }

    return (
        <cartContext.Provider value={{ cart, getCart, addToCart, deleteCart }}>
            {props.children}
        </cartContext.Provider>
    )
};

export default CartState;
