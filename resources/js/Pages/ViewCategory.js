import React from "react";
import Layout from "../Components/Layout";
import ProductPreview from "../Components/ProductPreview";

export default function ViewCategory(props) {
    const products = props.products.map((product) => {
        return (
            <ProductPreview 
            key = {product.id}
            name = {product.name} 
            thumb = {product.image}
            description = {product.description}
            permalink = {product.permalink} />
        );
    });
    return (
        <Layout>
            <h2>{props.category}</h2>
            {products}
        </Layout> 
    );
}