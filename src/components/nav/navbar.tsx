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
        <nav>
            <ul>     
                <li><button onClick={() => setContent('history')}>History</button></li>
                <li><button onClick={() => setContent('product')}>Products</button></li>
                <li><button onClick={() => setContent('merch')}>Merchandise</button></li>
                <li><button onClick={() => setContent('contact')}>Inquire</button></li>
            </ul>
        </nav>
    )
}