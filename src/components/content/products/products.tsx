import React from 'react'
import {Banner} from './banner/banner'
import './products.scss'
import sword from './banner/assets/warrior.png'
import potion from './banner/assets/healer.png'
import magic from './banner/assets/wizard.png'

export const Products = () => {
    return (
        <div className='products'>
            <h1>BEER</h1>
            <div className='beers'>
                <Banner img={sword} clr='red' name='WARRIOR' desc='strong beer' />
                <Banner img={potion} clr='green' name='HEALER' desc='light beer' />
                <Banner img={magic} clr='blue' name='WIZARD' desc='fruit beer' />
            </div>
            <h1>ADVENTURE PACK</h1>
            <div className='adventure'>
                
            </div>
        </div>
    )
}