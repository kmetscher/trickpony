import React from 'react'
import { Link } from '@inertiajs/inertia-react'

export default function Navigation() {

    return (
        <nav>
            <div className='categories-div'>
                <button className='categories'>Categories</button>
                <div className='categories-dropdown'>
                    <Link href="/categories/toysandgames">Toys and Games</Link>
                    <Link href="/categories/homeandoffice">Home and Office</Link>
                    <Link href="/categories/furnishings">Furnishings</Link>
                    <Link>Custom</Link>
                </div>
            </div>
            <Link>About</Link>
            <Link>Contact</Link>
        </nav>
    )
}