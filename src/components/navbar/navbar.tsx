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
                <div className='menu'>
                    <p>History</p>
                    <p>Products</p> 
                </div>
                <img className='logo' src={logo} alt='logo' />
                <div className='menu'>
                    <p>Merchandise</p>
                    <p>Contact</p> 
                </div>
                
            </div>
        </div>
    )
}