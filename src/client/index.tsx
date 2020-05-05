import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import {NavBar} from './components/nav/navbar'
import {Content} from './components/body/content'
import {Footer} from './components/footer/footer'

function Main() {
    const [bodyContent, setBodyContent] = useState('history')

    return (
        <>
            <header>
                <NavBar setContent={setBodyContent} />
            </header>
            <main>
                <Content content={bodyContent} />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

const container = document.getElementById('root')
ReactDOM.render(<Main />, container)