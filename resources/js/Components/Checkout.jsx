import { Inertia } from "@inertiajs/inertia";
import React, { useEffect } from "react";

export default function Checkout(props) {
    let data = null;
    async function fetchStripe() {
        const params = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        };
        let r;
        try {
            r = await fetch("/cart", params)
                .then((r) => {
                    data = r.text();
                    /*.then((rText) => {
                        console.log(rText.json());
                    });*/
                    console.log(data);
                });
        }
        catch(e) {
            console.log(e);
            return null;
        }
    }
    useEffect(() => {
        fetchStripe();
    }, []);

    return(
        <div>
            <h1>{data}</h1>
        </div>
    );
}