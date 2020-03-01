import React from 'react'

import './navbar.scss'
import menuImage from './assets/menuClosed.svg'

export function NavBar() {
    return (
        <div className='navBody'>
            <div className='navContent'>
                <img src={menuImage} alt='menu image' />
                <p>history</p>
                <p>products</p>
                <p>merchandise</p>
            </div>
        </div>
    )
}