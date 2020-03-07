import React from 'react'
import ReactDOM from 'react-dom'

import './scss/index.scss'

import {NavBar} from './components/navbar/navbar'
import {Banner} from './components/banner/banner'

function Main() {
    return (
        <div className='landingPage'>
            <NavBar />
            <Banner />
        </div>
    )
}

const container = document.getElementById('root')
ReactDOM.render(<Main />, container)