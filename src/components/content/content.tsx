import React from 'react'
import {History} from './history/history'
import {Products} from './products/products'

export const Content = (props: {content: string}) => {
    if (props.content === 'history') return <History />
    if (props.content === 'product') return <Products />
}