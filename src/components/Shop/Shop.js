import React, { useEffect, useState } from 'react';
import { addToDb, storedCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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
    const handleCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        console.log(exists);

        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        // const newCart = [...cart, selectedProduct];
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    useEffect(() => {
        const data = storedCart();
        const displayCart = [];
        for (const id in data) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = data[id];
                addedProduct.quantity = quantity;
                displayCart.push(addedProduct);
            }
        }
        setCart(displayCart);
    }, [products])
    return (
        <div className='shop'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleButton={handleCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;