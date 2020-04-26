import React, {useState, useEffect} from 'react'
import {History} from './history/history'
import {Products} from './products/products'

export const Content: React.FC<{ content: string }> = ({ content }) => {
    const [articel, setArticel] = useState(<History />)

    useEffect(() => {
        const body = content === 'product' ? <History /> : <Products />
        return () => {
            setArticel(body)
        }
    }, [content])

    return (
        articel
    )
}