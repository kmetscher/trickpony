import React, { useContext } from "react";
import { Link } from "@inertiajs/inertia-react";
import { CartContext } from "../Providers/CartContext";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

export default function CartContents(props) {
    let subtotal = 0;
    let local = 0;
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
        switch (Boolean(item.product.local)) {
            case false:
                subtotal += Number(item.product.price);
                break;
            case true:
                local++;
                break;
        }

        return (
            <CartItem item={item} index={index} key={index}/>
        );
    });
    const shippingMessage = local > 0
        ? "Your cart contains items that are only deliverable locally. You won't be charged for them now; after arranging for delivery and completing the project, you'll be sent an invoice."
        : null;

    return (
        <div className="cart-contents">
            {contents}
            <h2>Subtotal: {subtotal}</h2>
            <h3>{shippingMessage}</h3>
            <Checkout />
        </div>
    )
}