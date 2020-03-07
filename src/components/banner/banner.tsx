import React from 'react'
import './banner.scss' 

import magic from './magic.png'

export const Banner = () => {
    return (
        <div className='banner'>
            <div className='border'>
                <img className='image' src={magic} />
            </div>
        </div>
    )
}