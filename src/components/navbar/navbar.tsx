import React, { useState } from 'react'
import './navbar.scss'
import {Content} from '../content/content'
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
                <button onClick={() => setContent('history')}>History</button>
                <button onClick={() => setContent('product')}>Products</button> 
                <img className='logo' src={logo} alt='logo' /> 
                <button onClick={() => setContent('merch')}>Merchandise</button>
                <button onClick={() => setContent('contact')}>Inquire</button> 
            </div>
            <Content content={content}/>
        </div>
    )
}