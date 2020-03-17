import React from 'react'
import './banner.scss' 

type Props = {
    img: string;
    clr: string;
    name: string;
    desc: string
}

export const Banner = ({img, clr, name, desc}: Props) => {

    const borderStyle = {
        filter: `drop-shadow(3px 3px 0 ${clr}) 
                drop-shadow(-3px 3px 0 ${clr}) 
                drop-shadow(3px -3px 0 ${clr}) 
                drop-shadow(-3px -3px 0 ${clr}) 
                drop-shadow(5px 5px 3px black)`
    }
    
    return (
        <div className='banner' style={borderStyle}>
            <h2 className='name'>{name}</h2>
            <img className='image' src={img} />
            <h4 className='desc'>{desc}</h4>
        </div>
    )
}