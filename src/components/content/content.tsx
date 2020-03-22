import React from 'react'
import {History} from './history/history'
import {Products} from './products/products'

type Props = {
    content: string
}

export const Content = ({content}: Props) => {
    if (content === 'history') return <History />
    if (content === 'product') return <Products />
}