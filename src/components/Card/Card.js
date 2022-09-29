import React from 'react';
import "./Card.css"

const Card = (props) => {
    const {handleAddClick,cart}=props;

    const {name,img,settime,age}=props.cart;
    
    return (
        <div className='card'>
            <img src={img} alt="img"></img>
            <h3 className='card-name'>{name}</h3>
            <p>Age: {age}</p>
            <p>Time Required: {settime}s</p>
          <button onClick={()=>handleAddClick(cart)} className='btn-card'>
            <p>Add to Time</p>
            
          </button>
        </div>
    );
};

export default Card;