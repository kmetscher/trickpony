import React from "react";
import RemoveFromCart from "./RemoveFromCart";

export default function CartItem(props) {
    const itemOptions = Object.keys(props.item.options);
    const optionValues = itemOptions.map((option) => {
        return (
            <p key={option}>{`${option}: ${props.item.options[option]}`}</p>
        );
    });
    return (
        <div className="cart-item">
            <img src={props.item.product.thumb}></img>
            <div className="cart-item-text">
                <h3>{props.item.product.name}</h3>
                <h4>{props.item.product.price}</h4>
                <div className="cart-item-options">
                    {optionValues}
                </div>
                <RemoveFromCart index = {props.index} />
            </div>
        </div>
    );
}

