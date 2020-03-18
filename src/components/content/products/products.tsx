import React from 'react'
import {Banner} from './banner/banner'
import sword from './banner/assets/sword.png'
import potion from './banner/assets/potion.png'
import magic from './banner/assets/magic.png'

export const Products = () => {
    return (
        <div>
            <Banner img={sword} clr='red' name='WARRIOR' desc='strong beer' />
            <Banner img={potion} clr='green' name='HEALER' desc='light beer' />
            <Banner img={magic} clr='blue' name='WIZARD' desc='fruit beer' />
        </div>
    )
}