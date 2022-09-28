import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import "./Exercise.css"

const Exercise = () => {
    const [carts,setCart]=useState([]);
    const [singleCalculate,setsingleCalculate]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCart(data))

    },[]);

    const handleAddClick=(cart)=>{
        console.log(cart)
        const newsingleCalculate=[...singleCalculate,carts];
        setsingleCalculate(newsingleCalculate);
    }


    return (
        <div className='exercise-container'>
            <div className="card-container">
                {/* <h3>cart{cart.length}</h3> */}
                {carts.map(cart=><Card 
                key={cart.id}
                cart={cart}
                handleAddClick={handleAddClick}
                ></Card>)}
            </div>
            <div className="cart-container">
                <Cart singleCalculate={singleCalculate}></Cart>
                </div>     
        </div>
    );
};

export default Exercise;