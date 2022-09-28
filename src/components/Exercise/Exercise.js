import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import "./Exercise.css"

const Exercise = () => {
    const [carts,setCart]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCart(data))

    },[]);

    const handleAddClick=(cart)=>{
        console.log(cart)
    }


    return (
        <div className='exercise-container'>
            <div className="cart-container">
                {/* <h3>cart{cart.length}</h3> */}
                {carts.map(cart=><Cart 
                key={cart.id}
                cart={cart}
                handleAddClick={handleAddClick}
                ></Cart>)}
            </div>
            <div className="calculation-container"><h2>calculate</h2></div>     
        </div>
    );
};

export default Exercise;