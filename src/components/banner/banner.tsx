import React from 'react'
import CSS from 'csstype'
import './banner.scss' 

import magic from './assets/magic.png'
import sword from './assets/crossed-swords.png'
import potion from './assets/potion.png'

type Props = {
    image: string;
    colour: string
}

export const Banner = ({image, colour}: Props) => {
    
    return (
        <div className='banner'>
            <img className='image' src={image} />
        </div>
    )
}