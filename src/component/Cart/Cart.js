import React from 'react';

const Cart = ({review}) => {
    const {picture, name, text, reting} = review
    console.log(review)
    return (
        <div>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>{text}</p>
            <p><small>Rating : {reting}</small></p>
        </div>
    );
};

export default Cart;