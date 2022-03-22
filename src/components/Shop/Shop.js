import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    const handleCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleButton={handleCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>This is cart area</h2>
                <p>Items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;