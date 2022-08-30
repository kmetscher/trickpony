import React, {useContext, useState, useEffect} from "react";
import { CartContext } from "./CartContext";

export default function CartProvider({children}) {
    let storedCart = JSON.parse(localStorage.getItem('cart'));
    const emptyCart = [];
    storedCart = storedCart ? storedCart : emptyCart;
    const [cartState, setCartState] = useState(storedCart);
    const updateCart = (op, product) => {
        switch (op) {
            case "add":
                /* Using spread syntax to push a new cart item object 
                 * onto the stateful array without affecting existing
                 * items. This push operation also gives each item in
                 * the user's cart a unique index, referring to that 
                 * item in the user's cart specifically in that instance
                 * of their cart, which will be useful for removing 
                 * it later. */
                setCartState(current => [
                    ...current,
                    product,
                ]);
                break;
            case "remove":
                /* We can pass the current index of a given item in the
                 * cart to this function, since such an index will be 
                 * unique among items. We then filter the current cart
                 * by != this index and return the new array of items. Using
                 * the index instead of something like a product ID prevents
                 * nuking every item in the cart that shares an ID, since 
                 * someone might have multiple of the same items, possibly
                 * even with the same options for each one. */
                setCartState(current => {
                    current.filter((index) => {
                        return (index !== product.index);
                    });
                });
                break;
        }
    }
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartState));
    }, [cartState]);

    return (
        <CartContext.Provider value={{cartState, updateCart}} >
            {children}
        </CartContext.Provider>
    );
}