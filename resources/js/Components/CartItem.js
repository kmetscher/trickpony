import React from "react";
import RemoveFromCart from "./RemoveFromCart";

export default function CartItem(props) {
    const itemOptions = Object.keys(props.item.options);
    const optionValues = itemOptions.map((option) => {
        return (
            <li key={option}>{`${option}: ${props.item.options[option]}`}</li>
        );
    });
    return (
        <div className="cart-item">
            <div className="cart-item-visual">
                <img src={props.item.product.thumb}></img>
            </div>
            <div className="cart-item-text">
                <h3>{props.item.product.name}</h3>
                <h4>{props.item.product.price}</h4>
                <RemoveFromCart index={props.index} />
            </div>
            <div className="cart-item-options">
                <ul>
                    {optionValues}
                </ul>
            </div>
        </div>
    );
}

