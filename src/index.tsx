import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import waxStamp from './assets/waxStamp.png'
import logo from './assets/logo.png'
import {NavBar} from './components/nav/navbar'
import {Content} from './components/body/content'

function Main() {
    const [bodyContent, setBodyContent] = useState('history')

    return (
        <main className='landingPage'>
            <header>
                <img className='logo' src={logo} alt='strongcock brewery logo' />
                <NavBar />
            </header>
            <body>
                <Content content={bodyContent} />
            </body>
            <footer>

            </footer>
            <img className='waxStamp' src={waxStamp} alt='wax stamp' />
        </main>
    )
}

const container = document.getElementById('root')
ReactDOM.render(<Main />, container)