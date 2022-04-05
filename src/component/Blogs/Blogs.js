import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <div>
                <h1>What is context API</h1>
                <p>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.Context provides a way to pass data through the component tree without having to pass props down manually at every level. In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
            </div>
            <div>
                <h1>Inline Vs Inline Block </h1>
                <p>display: inline-block brought a new way to create side by side boxes that collapse and wrap properly depending on the available space in the containing element. It makes layouts that were previously accomplished with floats easier to create. No need to clear floats anymore.Compared to display: inline, the major difference is that inline-block allows to set a width and height on the element. Also, with display: inline, top and bottom margins and paddings are not respected, and with display: inline-block they are. Now, the difference between display: inline-block and display: block is that, with display: block, a line break happens after the element, so a block element doesn’t sit next to other elements.</p>
            </div>
        </div>
    );
};

export default Blogs;
