import React, {useState} from 'react'
import './banner.scss' 

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
        display === 'compact' ? setDisplay('banner') : setDisplay('compact')
    }
    
    return (
        <div className={display} 
             style={borderStyle}
             onClick={() => displayInfo()}
        >
            <img className='image' src={img} />
            <h2 className='name'>{name}</h2>
            <h4 className='desc'>{desc}</h4>
        </div>
    )
}