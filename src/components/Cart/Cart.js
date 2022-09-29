import React from 'react';
import "./Cart.css"
import img from "../../img/avater.png";

const Cart = ({singleCalculate}) => {
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
                <p>10s</p>
                <p>20s</p>
                <p>30s</p>
                <p>40s</p>
            </div>


<div className='time-show'>

    <h2>Practice Details</h2>
            <p>Practice time {singleCalculate.length}</p>
            <p>Break time {singleCalculate.length}</p>
</div>

            <button className='btn-completed'>
                <p>Activity Completed</p>
            </button>
        </div>
    );
};

export default Cart;