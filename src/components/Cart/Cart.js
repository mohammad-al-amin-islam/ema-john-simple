import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {


    let shippingTotal = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        shippingTotal = shippingTotal + product.shipping;
    }
    const priceReducer = (previous, current) => previous + (current.price * current.quantity);
    const total = cart.reduce(priceReducer, 0);
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shippingTotal + tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: ${quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping Charge: ${shippingTotal}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total:${grandTotal}</h5>
        </div>
    );
};

export default Cart;