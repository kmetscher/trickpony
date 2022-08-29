import React from 'react';
import Header from './Header';

export default function Layout({children}) {

    return (
        <div className='container'>
            <Header />
            <div className='mainFlex'>
                {children}
            </div>
        </div>
    )
}