import React from 'react';
import Header from './Header';
import CartProvider from '../Providers/CartProvider';

export default function Layout({ children }) {

    return (
        <div className='container'>
            <CartProvider>
                <Header />
                <div className='mainFlex'>
                    {children}
                </div>
            </CartProvider>
        </div>
    )
}