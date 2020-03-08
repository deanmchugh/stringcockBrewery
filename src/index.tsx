import React from 'react'
import ReactDOM from 'react-dom'

import './scss/index.scss'

import {NavBar} from './components/navbar/navbar'
import {Banner} from './components/banner/banner'

import magic from '../src/components/banner/assets/magic.png'
import sword from '../src/components/banner/assets/crossed-swords.png'
import potion from '../src/components/banner/assets/potion.png'

function Main() {
    return (
        <div className='landingPage'>
            <Banner image={magic} colour={'255, 0, 255, 0.5'}/>
            <Banner image={sword} colour={'255, 0, 0, 0.5'}/>
            <Banner image={potion} colour={'0, 0, 255, 0.5'}/>
        </div>
    )
}

const container = document.getElementById('root')
ReactDOM.render(<Main />, container)