import React, { useContext } from "react";
import { Link } from "@inertiajs/inertia-react";
import { CartContext } from "../Providers/CartContext";

export default function CartContents(props) {
    const { cartState, updateCart } = useContext(CartContext);
    const contents = props.cartItems.map((item, index) => {
        const optionValues = Object.entries(item);
        const options = optionValues.map((option, index) => {
            if (
                option[0] !== 'id' &&
                option[0] !== 'name' &&
                option[0] !== 'price' &&
                option[0] !== 'local' &&
                option[0] !== 'thumb') {
                return (
                    <p key={index}>{`${option[0]}: ${option[1]}`}</p>
                );
            }
        })
        return (
            <div className="cart-item" key={index}>
                <img src={item.thumb} />
                <div className="cart-item-text">
                    <h3>{item.name}</h3>
                    <h4>{item.price}</h4>
                    <div className="cart-item-options">
                        {options}
                    </div>
                    <button 
                    className="add-to-cart"
                    onClick={(e) => {
                        e.preventDefault();
                        updateCart("remove", {index: index});
                    }}>
                        Remove from Cart
                    </button>
                </div>
            </div>
        )
    });

    return (
        <div className="cart-contents">
            {contents}
        </div>
    )
}