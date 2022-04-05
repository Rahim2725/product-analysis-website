import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../logo.jpg'
import './Home.css'
import '../Cart/Cart'
import Cart from '../Cart/Cart';
import useReviews from '../../hooks/useReviewa';

const Home = () => {
    const [reviews, setReviews] =useReviews()
    return (
        <div className='container'>
            <div className='home-container'>
                <div className='headphone-detail'>
                    <h1>Jabra Evolve 20 SE Duo MS USB Headset</h1>
                    <p>The Jabra Evolve 20 SE Duo MS USB Headset is a USB headset. A workplace transformation, not just headsets. The Evolve 20 Special Edition is an entry-level professional headset with superb sound for calls and music, as well as easy call management via a control device that makes, takes, and mutes call.</p>
                    <button>Live Product</button>
                </div>
                <div className='headphone-img'>
                    <img src={image} alt="logo" />
                </div>
            </div>
            <div className='customer-container'>
                <h1>Customer Reviews</h1>
                <div className='review-container'>
                   {
                       reviews.slice(0,3).map(review => <Cart
                       key={review._id}
                       review={review}
                       ></Cart>)
                   }
                </div>
                <Link to="/reviews" >
                    <button>All Customer Reviews</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;