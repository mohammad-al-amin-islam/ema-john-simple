import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Product = ({ handleButton, product }) => {
    // const { handleButton, product } = props;
    const { img, name, seller, price, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price:${price}</p>
                <p><small>Manufacturer:{seller}</small></p>
                <p><small>Ratings:{ratings}star</small></p>
            </div>
            <button onClick={() => handleButton(product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;