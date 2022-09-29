import React, { useState } from 'react';
import img from "../../img/avater.png"
import "./Cart.css"

const Cart = ({practiceTime}) => {
    console.log(practiceTime)
    const [addbreak,setaddBreak]=useState(0)
    const firstSecond=()=>{
        setaddBreak(10)

    }
    let totaltime=0;
    for(const cart of practiceTime){
        totaltime=totaltime+cart.settime;
       
    }
    return (
        <div className='cart'>
            <div className='profile'>
                <img src={img} alt="" />
                <h3>Zahid Hossain</h3>
            </div>
            <div className='profile-info'>
               <div>
               <h4>75kg</h4>
                <p>Weight</p>
               </div>
               <div>
               <h4>6.5</h4>
                <p>Height</p>
               </div>
               <div>
               <h4>25yrs</h4>
                <p>Age</p>
               </div>
            </div>
            <h2>Add a Break</h2>
            <div className='break-time'>
                <button onClick={firstSecond}>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
            </div>

<div className='time-show'>

    <h2>Practice Details</h2>
            <p>Practice time {totaltime}</p>
            <p>Break time {addbreak}</p>
</div>

            <button className='btn-completed'>
                <p>Activity Completed</p>
            </button>
        </div>
    );
};
export default Cart;