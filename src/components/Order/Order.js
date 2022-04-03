import React from 'react';
import useCart from '../../hooks/useCart/useCart';
import useProducts from '../../hooks/useProducts/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleDeleteBtn = (deleteProduct) => {
        const exist = cart.filter(product => product.id !== deleteProduct.id)
        setCart(exist);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;