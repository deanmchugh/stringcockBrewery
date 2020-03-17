import React, { useState } from 'react'

import './navbar.scss'
import menuImage from './assets/menuClosed.svg'
import logo from './assets/logo.png'

export const NavBar = () => {
    const [styling, setStyling] = useState('navShow')
    const [content, setContent] = useState('history')

    function toggleMenu() {
        const state = styling === 'navShow' ? 'navHide' : 'navShow'
        setStyling(state)
    }

    return (
        <div className='navBody'>
            <div className={styling}>
                <img className='logo' src={logo} alt='logo' />      
                <div className='menu'>
                    <button onClick={() => setContent('history')}>History</button>
                    <button onClick={() => setContent('products')}>Products</button> 
                    <button onClick={() => setContent('merch')}>Merchandise</button>
                    <button onClick={() => setContent('contact')}>Contact</button> 
                </div>
            </div>
        </div>
    )
}