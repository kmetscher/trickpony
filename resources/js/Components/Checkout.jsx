import { Inertia } from "@inertiajs/inertia";
import React, { useEffect, useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function Checkout(props) {
    const [final, setFinal] = useState([]);
    // const stripe = useStripe();
    // const elements = useElements();
    const fetchStripe = async() => {
        const params = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        };
        const r = await fetch("/cart", params);
        return r.text();
    }

    useEffect(() => {
        fetchStripe()
            .then((res) => {
                setFinal(JSON.parse(res)); 
            });
    }, []);

    if (!final) {
        return(
            <div>
                <h1>Loading</h1>
            </div>
        );
    }

    return(
        <div>
            <h1>Here be {final.clientSecret}</h1>
        </div>
    );
}