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

    const highlight = {
        borderBottom: content === HTMLElement.name ? '3px solid red' : '0 solid red'
    }

    return (
        <div className='navBody'>
            <div className={styling}>     
                <button name='history' style={highlight} onClick={() => setContent('history')}>History</button>
                <button name='product' style={highlight} onClick={() => setContent('product')}>Products</button> 
                <img className='logo' src={logo} alt='logo' /> 
                <button name='merch' style={highlight} onClick={() => setContent('merch')}>Merchandise</button>
                <button name='inquire' style={highlight} onClick={() => setContent('contact')}>Inquire</button> 
            </div>
            <Content content={content}/>
        </div>
    )
}