import React from 'react'
import ReactDOM from 'react-dom'

import {Header} from './components/header'

function Main() {
    return (
        <Header />
    )
}

const container = document.getElementById('root')
ReactDOM.render(<Main />, container)