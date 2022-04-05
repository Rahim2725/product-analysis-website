import React from 'react';
import './Cart.css'

const Cart = ({review}) => {
    const {picture, name, text, reting} = review
    console.log(review)
    return (
        <div className='cart'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>{text}</p>
            <p><small>Rating : {reting}</small></p>
        </div>
    );
};

export default Cart;