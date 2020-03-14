import React, { useState } from 'react'

import './navbar.scss'
import menuImage from './assets/menuClosed.svg'
import logo from './assets/logo.png'

export const NavBar = () => {
    const [styling, setStyling] = useState('navShow')

    function toggleMenu() {
        const state = styling === 'navShow' ? 'navHide' : 'navShow'
        setStyling(state)
    }

    return (
        <div className='navBody'>
            <div className={styling}>
                <p>History</p>
                <p>Products</p>
                <img className='logo' src={logo} alt='logo' />
                <p>Merchandise</p>
                <p>Contact</p>
            </div>
        </div>
    )
}