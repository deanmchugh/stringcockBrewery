import React from 'react'
import ReactDOM from 'react-dom'

import HomePage from './components/home'

function Main() {
    return (
        <HomePage />
    )
}

const container = document.getElementById('root')
ReactDOM.render(<Main />, container)