import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts/useProducts';
import { addToDb, storedCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import useCart from '../../hooks/useCart/useCart';

const Shop = () => {

    // const [cart, setCart] = useState([]);
    const [cart, setCart] = useCart();

    const [page, setPage] = useState(0);

    const [size, setSize] = useState(10);

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [page, size]);

    const [pageCount, setPageCount] = useState(0);
    useEffect(() => {
        fetch('http://localhost:5000/count')
            .then(res => res.json())
            .then(data => {
                const count = data.result;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            })
    }, [])
    /* useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []); */
    const handleCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        // const newCart = [...cart, selectedProduct];
        setCart(newCart);
        addToDb(selectedProduct._id);
    }
    // useEffect(() => {
    //     const data = storedCart();
    //     const displayCart = [];
    //     for (const id in data) {
    //         const addedProduct = products.find(product => product._id === id);
    //         if (addedProduct) {
    //             const quantity = data[id];
    //             addedProduct.quantity = quantity;
    //             displayCart.push(addedProduct);
    //         }
    //     }
    //     setCart(displayCart);
    // }, [products])
    return (
        <>
            <div className='shop'>
                <div className="product-container">
                    {
                        products.map(product => <Product key={product._id} product={product} handleButton={handleCart}></Product>)
                    }
                    {/* <div className='pagination'>
                        {
                            [...Array(pageCount).keys()].map(number => <button
                                className={number === page ? 'standard' : ''}
                                onClick={() => {
                                    setPage(number);
                                }}
                            >{number + 1}</button>)
                        }

                        <select onChange={e => setSize(e.target.value)
                        }>
                            <option value="5">5</option>
                            <option value="10" selected>10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div> */}
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to='/order'>
                            <button>Review Orders</button>
                        </Link>
                    </Cart>
                </div>
            </div>
            <div className='pagination'>
                {
                    [...Array(pageCount).keys()].map(number => <button
                        className={number === page ? 'standard' : ''}
                        onClick={() => {
                            setPage(number);
                        }}
                        key={number}
                    >{number + 1}</button>)
                }

                <select onChange={e => setSize(e.target.value)
                }>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </>
    );
};

export default Shop;