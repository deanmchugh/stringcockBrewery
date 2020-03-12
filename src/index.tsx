import React from 'react'
import ReactDOM from 'react-dom'

import './scss/index.scss'

import {NavBar} from './components/navbar/navbar'
import {Banner} from './components/banner/banner'
import {Bio} from './components/bio/Bio'

function Main() {
    return (
        <div className='landingPage'>
            <Bio />
        </div>
    )
}

const container = document.getElementById('root')
ReactDOM.render(<Main />, container)