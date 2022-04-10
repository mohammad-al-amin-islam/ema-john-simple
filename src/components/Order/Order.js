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
    const [cart, setCart] = useCart(products);
    const handleDeleteBtn = (deleteProduct) => {
        const exist = cart.filter(product => product.id !== deleteProduct.id)
        setCart(exist);
        removeFromDb(deleteProduct.id);
    }
    return (
        <div className='shop'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem
                        product={product}
                        key={product.id}
                        handleDeleteBtn={handleDeleteBtn}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/inventory'>
                        <button>Procced Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;