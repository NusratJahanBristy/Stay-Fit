import React, { useState } from 'react';
import img from "../../img/avater.png"
import "./Cart.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ practiceTime }) => {
    console.log(practiceTime)
    const [addbreak, setaddBreak] = useState(0)
    const storedData = localStorage.getItem("breakTime")
    const first = () => {
        setaddBreak(10)
        localStorage.setItem("breakTime", 10)
    }
    const second = () => {
        setaddBreak(20)
        localStorage.setItem("breakTime", 20)
    }
    const third = () => {
        setaddBreak(30)
        localStorage.setItem("breakTime", 30)
    }
    const fourth = () => {
        setaddBreak(40)
        localStorage.setItem("breakTime", 40)
    }
    const modal = () => toast('wow');
    let totaltime = 0;
    for (const cart of practiceTime) {
        totaltime = totaltime + cart.settime;

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
                <button onClick={first}>10s</button>
                <button onClick={second}>20s</button>
                <button onClick={third}>30s</button>
                <button onClick={fourth}>40s</button>
            </div>

            <div className='time-show'>

                <h2>Practice Details</h2>
                <p>Practice time {totaltime}</p>
                <p>Break time {storedData}</p>
            </div>
            <div>
                <ToastContainer></ToastContainer>
                <button onClick={modal} className='btn-completed'>Activity Completed

                </button>

                </div>


        </div>
    );
};
export default Cart;