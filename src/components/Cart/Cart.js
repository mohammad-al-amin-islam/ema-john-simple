import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    const priceReducer = (previous, current) => previous + current.price;
    const total = cart.reduce(priceReducer, 0);

    let shippingTotal = 0;
    for (const product of cart) {
        shippingTotal = shippingTotal + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shippingTotal + tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: ${cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping Charge: ${shippingTotal}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total:${grandTotal}</h5>
        </div>
    );
};

export default Cart;