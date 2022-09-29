import React from 'react';
import "./Card.css"

const Card = (props) => {
    const {handleAddClick,carts}=props;
    const {name,img,time}=props.cart;
    
    return (
        <div className='card'>
            <img src={img} alt="img"></img>
            <h3 className='card-name'>{name}</h3>
            <p>Time Required: {time}s</p>
          <button onClick={()=>handleAddClick(carts)} className='btn-card'>
            <p>Add to Cart</p>
            
          </button>
        </div>
    );
};

export default Card;