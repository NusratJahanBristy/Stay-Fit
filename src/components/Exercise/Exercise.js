import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import "./Exercise.css"
import { ToastContainer, toast } from 'react-toastify';

const Exercise = () => {
    const [cart,setcart]=useState([]);
    const [practiceTime,setpracticeTime]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setcart(data))
    },[]);

    const handleAddClick=(cart)=>{
        const newpracticeTime=[...practiceTime,cart];
        setpracticeTime(newpracticeTime);
    }
    return (
        <div className='exercise-container'>
            <div className="card-container">
                {cart.map(cart=><Card 
                key={cart.id}
                cart={cart}
                handleAddClick={handleAddClick}
                ></Card>)}
            </div>
            <div className="cart-container">
                <Cart practiceTime={practiceTime}></Cart>
            </div>  
              
        </div>
    );
};

export default Exercise;