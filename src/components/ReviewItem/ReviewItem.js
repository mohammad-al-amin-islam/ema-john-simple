import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const ReviewItem = ({ product, handleDeleteBtn }) => {
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
                <div className="delete-container">
                    <button className='delete-btn' onClick={() => handleDeleteBtn(product)}>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ReviewItem;