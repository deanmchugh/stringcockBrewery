import React from 'react'
import CSS from 'csstype'
import './banner.scss' 

import magic from './assets/magic.png'
import sword from './assets/crossed-swords.png'
import potion from './assets/potion.png'

export const Banner = (image: string, colour: string) => {
    
    const borderColour: CSS.Properties = {
        borderLeft: 'solid 20px rgba(' + {colour} + ');',
        borderRight: 'solid 20px rgba(' + {colour} + ');'
    }
    
    return (
        <div className='banner'>
            <div className='border' style={borderColour} >
                <img className='image' src={image} />
            </div>
        </div>
    )
}