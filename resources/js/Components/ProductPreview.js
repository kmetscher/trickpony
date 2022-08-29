import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function ProductPreview(props) {

    return (
        <div className="product-preview">
            <Link className="product-visual" href={`/product/${props.permalink}`}>
                <img src={props.thumb}></img>
            </Link>
            <div className="product-text">
                <Link className="product-title" href={`/product/${props.permalink}`}>{props.name}</Link>
                <p>{props.description}</p>
                <Link href={`/product/${props.permalink}`}>More...</Link>
            </div>
        </div>
    )
}