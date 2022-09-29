import React from 'react';
import "./Blog.css"

const Blog = () => {
    return (
        <div >
            <div className='blog'>
                <div>
                    <h1>How does react work?</h1>
                    <p></p>
                </div>
                <div>
                    <h1>Props and State difference?</h1>
                    <p></p>
                </div>
                <div>
                    <h1>where we can use  UseEffet without api data load? </h1>
                    <p>The useEffect Hook allows us to perform side effects in your components.
                    Some examples of side effects are: directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;