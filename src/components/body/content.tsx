import React, {useState, useEffect, FC} from 'react'
import {History} from './history/history'
import {Products} from './products/products'
import {Contacts} from './contacts/contacts'
import {Merchandise} from './merch/merchandise'

export const Content: FC<{ content: string }> = ({ content }) => {
    const [articel, setArticel] = useState(<History />)

    useEffect(() => {
        let body: any
        switch (content) {
            case 'product' : 
                setArticel(<Products />)
                break
            case 'history' : 
                setArticel(<History />)
                break
            case 'contact' : 
                setArticel(<Contacts />)
                break
            case 'merch' : 
                setArticel(<Merchandise />)
                break  
        } 
    }, [content])

    return (
        articel
    )
}