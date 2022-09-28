import React from 'react';
import "./Cart.css"

const Cart = ({singleCalculate}) => {
    return (
        <div>
            <h2>singleCalculate</h2>
                <p>select item{singleCalculate.length}</p>
        </div>
    );
};

export default Cart;