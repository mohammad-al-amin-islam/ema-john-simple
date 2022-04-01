import { useEffect, useState } from "react"
import { storedCart } from "../../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const getCart = storedCart();
        const displayCart = [];
        for (const id in getCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = getCart[id];
                addedProduct.quantity = quantity;
                displayCart.push(addedProduct);
            }

        }
        setCart(displayCart);
    }, [products]);
    return [cart, setCart];
}

export default useCart;