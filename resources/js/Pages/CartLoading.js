import React, { useContext } from "react";
import { Inertia } from "@inertiajs/inertia";
import { CartContext } from "../Providers/CartContext";
import Layout from "../Components/Layout";

export default function CartLoading(props) {
    const { cartState, updateCart } = useContext(CartContext);
    Inertia.post('/cart', cartState);

    return (
        <Layout>
            <h1>Loading...</h1>
        </Layout>
    )
}