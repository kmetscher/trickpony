import React from "react";
import Layout from "../Components/Layout";
import Carousel from "../Components/Carousel";
import AddToCart from "../Components/AddToCart";

export default function ViewProduct(props) {

    return (
        <Layout>
            <div className="view-product">
                <Carousel images={props.thumbs} />
                <div className="view-product-text">
                    <h2>{props.product.name}</h2>
                    <h3>{props.product.price}</h3>
                    <p>{props.product.description}</p>
                    <AddToCart 
                    options = {props.options} 
                    product = {props.product}/>
                </div>
            </div>
        </Layout>
    )
}