import React, { useContext } from "react";
import { CartContext } from "../Providers/CartContext";

export default function RemoveFromCart(props) {
    const { cartState, updateCart } = useContext(CartContext);
    function remove() {
        updateCart("remove", { index: props.index });
    }
    return (
        <button
            className="add-to-cart"
            onClick={(e) => {
                e.preventDefault();
                remove();
            }}>
                Remove from Cart
        </button>
    );
}
