import React from 'react';
import useReviews from '../../hooks/useReviewa';
import Cart from '../Cart/Cart';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div>
            {
                reviews.map(review => <Cart 
                key={review._id}
                review={review}
                ></Cart> )
            }
        </div>
    );
};

export default Reviews;