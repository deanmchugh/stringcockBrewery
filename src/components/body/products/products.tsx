import React, {useState, useEffect} from 'react'
import {Banner} from './banner/banner'
import './products.scss'
import {beers} from './data'

export const Products = () => {
    const [banners, setBanners] = useState([])

    useEffect(() => {
        const banners: Array<React.FC> = []

        beers.forEach(beer => {
            banners.push(<Banner img={beer.image} clr={beer.colour} name={beer.name} desc={beer.decription} />)
        })

        return () => {
            setBanners(banners)
        }
    }, [])

    return (
        <article className='products'>
            <h1>BEER</h1>
            <div className='beers'>
                {banners}
            </div>
            <h1>ADVENTURE PACK</h1>
            <div className='adventure'>
                
            </div>
        </article>
    )
}