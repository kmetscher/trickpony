import React from 'react';

export const CartContext = React.createContext({
    cart: [],
    updateCart: (op, product) => {},
});