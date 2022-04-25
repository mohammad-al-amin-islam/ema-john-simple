import { useEffect, useState } from "react"
import { storedCart } from "../../utilities/fakedb";

const useCart = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const getCart = storedCart();
        const displayCart = [];
        const keys = Object.keys(getCart);
        fetch('http://localhost:5000/productKeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(response => response.json())
            .then(products => {
                for (const id in getCart) {
                    const addedProduct = products.find(product => product._id === id);
                    if (addedProduct) {
                        const quantity = getCart[id];
                        addedProduct.quantity = quantity;
                        displayCart.push(addedProduct);
                    }

                }
                setCart(displayCart);
            })

        // for (const id in getCart) {
        //     const addedProduct = products.find(product => product._id === id);
        //     if (addedProduct) {
        //         const quantity = getCart[id];
        //         addedProduct.quantity = quantity;
        //         displayCart.push(addedProduct);
        //     }

        // }
        // setCart(displayCart);
    }, []);
    return [cart, setCart];
}

export default useCart;