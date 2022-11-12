import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Providers/CartContext";

export default function AddToCart(props) {
    const productValues = {
        id: props.product.id,
        name: props.product.name,
        price: props.product.price,
        local: props.product.local,
        thumb: props.product.image,
    };
    let productOptions = {};
    const optionKeys = Object.keys(props.options);
    optionKeys.map((option) => {
        productOptions = {
            ...productOptions,
            [option]: '',
        }
    });
    const [optionState, setOptionState] = useState(productOptions);
    const { cartState, updateCart } = useContext(CartContext);
    const [submissionState, setSubmissionState] = useState(false);
    const swatches = optionKeys.map((option) => {
        const values = props.options[option].map((value) => {
            return (
                <button
                    className={
                        optionState[option] === value.name ?
                            "swatch-selected" : "swatch"
                    }
                    style={
                        option === 'Style' ?
                        {
                            border: 'none', 
                            backgroundImage: `url('${value.value}')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'contain'

                        } :
                        { backgroundColor: value.value }
                    }
                    onClick={(e) => {
                        e.preventDefault();
                        setOptionState({
                            ...optionState,
                            [option]: value.name
                        });
                    }}
                    key={value.id} >
                </button>
            );
        });
        return (
            <div className="option" key={option}>
                <h4>{option}</h4>
                <div className="option-swatches">
                    {values}
                    <button
                        className={
                            optionState[option] === 'Custom' ?
                                "swatch-selected" : "swatch"
                        }
                        style={{ backgroundColor: 'white' }}
                        onClick={(e) => {
                            e.preventDefault();
                            setOptionState({
                                ...optionState,
                                [option]: 'Custom'
                            });
                        }} >
                        ?
                    </button>
                </div>
                <p>{optionState[option]}</p>
            </div>
        );
    });

    useEffect(() => {
        setTimeout(() => {
            setSubmissionState(false);
        }, 2500);
    }, [submissionState]);

    return (
        <div className="product-options">
            <div className="swatches">
                {swatches}
            </div>
            <h4>Special instructions</h4>
            <textarea onChange={(e) => {
                setOptionState({
                    ...optionState,
                    Instructions: e.target.value
                });
            }}
            placeholder="Request unique colors, engravings, carvings, plaques...">
            </textarea>
            <button
                disabled={
                    Object.values(optionState).every(field => field) ?
                        false : true
                }
                onClick={(e) => {
                    e.preventDefault();
                    updateCart('add', { product: productValues, options: optionState });
                    setOptionState(productOptions);
                    setSubmissionState(true);
                }}
                className="add-to-cart" >
                {submissionState ? "Added to Cart!" : "Add to Cart"}
            </button>
        </div>
    )
}