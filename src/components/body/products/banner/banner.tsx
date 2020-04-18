import React, {useState} from 'react'
import './banner.scss' 
import close from './assets/close.png'

type Props = {
    img: string;
    clr: string;
    name: string;
    desc: string
}

export const Banner = ({img, clr, name, desc}: Props) => {
    const [display, setDisplay] = useState('compact')

    const borderStyle = {
        filter: `drop-shadow(3px 3px 0 ${clr}) 
                drop-shadow(-3px 3px 0 ${clr}) 
                drop-shadow(3px -3px 0 ${clr}) 
                drop-shadow(-3px -3px 0 ${clr}) 
                drop-shadow(5px 5px 3px black)`
    }

    const displayInfo = () => {
        display === 'compact' ? setDisplay('expand') : setDisplay('compact')
    }
    
    return (
        <div className={display} onClick={() => displayInfo()}>
            <div className='banner' style={borderStyle}>
                <img className='image' src={img} />
                <h2 className='name'>{name}</h2>
                <h4 className='desc'>{desc}</h4>
            </div>
            <h2 className='label'>BEER LABEL</h2>
            <img className='closeIcon' src={close} onClick={() => displayInfo()}/>
        </div> 
    )
}