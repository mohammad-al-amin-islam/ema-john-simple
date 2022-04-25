import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart/useCart';
import useProducts from '../../hooks/useProducts/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart();
    const handleDeleteBtn = (deleteProduct) => {
        const exist = cart.filter(product => product._id !== deleteProduct._id)
        setCart(exist);
        removeFromDb(deleteProduct._id);
    }
    return (
        <div className='shop'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem
                        product={product}
                        key={product._id}
                        handleDeleteBtn={handleDeleteBtn}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/shipping'>
                        <button>Procced Shipping</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;