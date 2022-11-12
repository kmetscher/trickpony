import React, {useContext} from "react";
import Layout from "../Components/Layout";
import CartContents from "../Components/CartContents";
import Checkout from "../Components/Checkout";

export default function Cart(props) {
    return (
        <Layout>
            <h2>Cart</h2>
            <CartContents />
        </Layout>
    );
}