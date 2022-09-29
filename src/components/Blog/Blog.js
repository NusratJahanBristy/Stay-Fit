import React from 'react';
import "./Blog.css"

const Blog = () => {
    return (
        <div >
            <div className='blog-container'>
                <div className='blog'>
                    <h1>How does react work?</h1>
                    <p>React uses a declarative paradigm that makes it easier to reason about your application
                     and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
                </div>
                <div className='blog'>
                    <h1>Props and State difference?</h1>
                    <p><strong>PROPS</strong> The Data is passed from one component to another.It is Immutable (cannot be modified).
                    Props can be used with state and functional components.Props are read-only.<br></br>
                    <strong>State</strong> The Data is passed within the component only.It is Mutable ( can be modified).State can be used only with the state components/class component.State is both read and write.</p>
                    
                </div>
                <div className='blog'>
                    <h1>where we can use  UseEffet without api data load? </h1>
                    <p>The useEffect Hook allows us to perform side effects in our components.
                    Some examples of side effects are: setting up a subscription, 
                    and manually changing the DOM in React components are all examples of side effects
                    and timers.
                    useEffect accepts two arguments. The second argument is optional.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;