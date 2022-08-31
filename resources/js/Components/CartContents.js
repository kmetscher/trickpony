import React, { useContext } from "react";
import { Link } from "@inertiajs/inertia-react";
import { CartContext } from "../Providers/CartContext";
import RemoveFromCart from "./RemoveFromCart";
import CartItem from "./CartItem";

export default function CartContents(props) {
    let subtotal = 0;
    const { cartState, updateCart } = useContext(CartContext);
    if (cartState.length === 0) {
        return (
            <div>
                <h3>Looks like there's nothing here.</h3>
                <h4>Add something special to your cart first.</h4>
            </div>
        )
    }
    const contents = cartState.map((item, index) => {
        subtotal += item.product.price;
        return (
            <CartItem item={item} index={index} key={index}/>
        );
    });

    return (
        <div className="cart-contents">
            {contents}
            <h3>Subtotal: {subtotal}</h3>
        </div>
    )
}