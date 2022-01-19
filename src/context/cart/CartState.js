import React from 'react';
import cartContext from './cartContext'

const CartState = () => {
    const host = "http://localhost:5000"
    const products = []
    
    return (
        <cartContext.Provider value={{  }}>
            {props.children}
        </cartContext.Provider>
    )
};

export default CartState;
