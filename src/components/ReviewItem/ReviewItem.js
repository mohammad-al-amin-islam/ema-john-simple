import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product }) => {
    const { name, price, shipping, quantity, img } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-item-details-container'>
                <div className="review-item-details">
                    <p className="product-name" title={name}>
                        {name.length > 20 ? name.slice(0.20) + '...' : name}
                    </p>
                    <p>Price:{price}</p>
                    <p>Shpping:{shipping}</p>
                    <p>Quantity:{quantity}</p>
                </div>
                <div className="delete-btn">
                    <button>delete</button>
                </div>

            </div>
        </div>
    );
};

export default ReviewItem;