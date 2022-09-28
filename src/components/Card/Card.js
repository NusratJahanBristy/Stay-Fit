import React from 'react';
import "./Card.css"

const Cart = (props) => {
    const {handleAddClick,cart}=props;
    const {name,img,time}=props.cart;
    
    return (
        <div className='cart'>
            <img src={img} alt="img"></img>
            <h3 className='cart-name'>{name}</h3>
            <p>Time Required: {time}s</p>
          <button onClick={()=>handleAddClick(cart)} className='btn-cart'>
            <p>Add to Cart</p>
            
          </button>
        </div>
    );
};

export default Cart;