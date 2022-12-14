import React from "react";
import Layout from "../Components/Layout";
import Carousel from "../Components/Carousel";
import AddToCart from "../Components/AddToCart";

export default function ViewProduct(props) {
    const shippingInfo = 
    props.product.local 
        ? "This item is only available for local pickup, and you will only be charged for it upon completion of the project."
        : "Ships within the United States in 9000 days for $93";

    return (
        <Layout>
            <div className="view-product">
                <Carousel images={props.thumbs} />
                <div className="view-product-text">
                    <h2>{props.product.name}</h2>
                    <h3>{props.product.price}</h3>
                    <p>{props.product.description}</p>
                    <h3>Shipping</h3>
                    <p>{shippingInfo}</p>
                    <AddToCart 
                    options = {props.options} 
                    product = {props.product}/>
                </div>
            </div>
        </Layout>
    )
}