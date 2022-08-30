import React, {useState, useContext} from "react";
import { Link } from "@inertiajs/inertia-react";
import { CartContext } from "../Providers/CartContext";

export default function HeaderCart(props) {
    const {cartState, updateCart} = useContext(CartContext);
    const itemCount = cartState.length();

    return (
        <Link href="/cart">Cart </Link>
    )
}