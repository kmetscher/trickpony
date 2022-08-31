import React, {useContext} from "react";
import Layout from "../Components/Layout";
import CartContents from "../Components/CartContents";

export default function Cart(props) {
    return (
        <Layout>
            <h2>Cart</h2>
            <CartContents />
        </Layout>
    );
}