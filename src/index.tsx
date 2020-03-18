import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import waxStamp from './assets/waxStamp.png'
import {NavBar} from './components/navbar/navbar'

function Main() {
    return (
        <div className='landingPage'>
            <img className='waxStamp' src={waxStamp} alt='wax stamp' />
            <NavBar />
        </div>
    )
}

const container = document.getElementById('root')
ReactDOM.render(<Main />, container)