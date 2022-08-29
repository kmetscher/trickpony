import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import Navigation from './Navigation';

export default function Header() {

    return (
        <header>
            <img className='logo' src='/storage/images/logo.png'></img>
            <Link href="/" className='site-title'>Trick Pony</Link>
            <Navigation />
        </header>
    )
}