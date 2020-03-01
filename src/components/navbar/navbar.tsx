import React, { useState } from 'react'

import './navbar.scss'
import menuImage from './assets/menuClosed.svg'

export const NavBar = () => {
    const [styling, setStyling] = useState('navShow')

    function toggleMenu() {
        const state = styling === 'navShow' ? 'navHide' : 'navShow'
        setStyling(state)
    }

    return (
        <div className='navBody'>
            <button onClick={() => toggleMenu()}>
                    <img src={menuImage} alt='menu' />
            </button>
            <div className={styling}>
                <p>History</p>
                <p>Products</p>
                <p>Merchandise</p>
                <p>Contact</p>
            </div>
        </div>
    )
}