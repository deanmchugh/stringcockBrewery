import React, { useState, MouseEvent, FC } from 'react'
import './navbar.scss'
import logo from '../../assets/logo.png'
import menu from '../../assets/menuIcon.png'

interface PropsFunction {
    setContent: (content: string) => void
}

export const NavBar: FC<PropsFunction> = ({ setContent }) => {
    const [showMenu, setShowMenu] = useState('menuHide')

    function toggleMenu() {
        const state = showMenu === 'menuShow' ? 'menuHide' : 'menuShow'
        setShowMenu(state)
    }

    function setBodyContent(e: MouseEvent<HTMLButtonElement>) {
        setContent(e.currentTarget.name)
        toggleMenu()
    }

    return (
        <nav>
            <button onClick={() => toggleMenu()}>
                <img className='menuIcon' src={menu} alt='icon to toggle show menu' />
            </button>
            <img className='logo' src={logo} alt='strongcock brewery logo' />
            <ul className={showMenu}>     
                <li><button name='history' onClick={setBodyContent}>History</button></li>
                <li><button name='product' onClick={setBodyContent}>Products</button></li>
                <li><button name='merch' onClick={setBodyContent}>Merchandise</button></li>
                <li><button name='contact' onClick={setBodyContent}>Inquire</button></li>
            </ul>
        </nav>
    )
}