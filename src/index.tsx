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
            <Banner img={magic} clr={'blue'} name={'THE WIZARD'} desc={'A Radler with fruity finish'}/>
            <Banner img={sword} clr={'red'} name={'THE WARRIOR'} desc={'A India Pale Larger with a bold flavour'}/>
            <Banner img={potion} clr={'green'} name={'THE HEALER'} desc={'A refreshing IPA'}/>
        </div>
    )
}

const container = document.getElementById('root')
ReactDOM.render(<Main />, container)