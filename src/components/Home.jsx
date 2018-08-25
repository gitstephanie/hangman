import * as React from 'react'
import {Link} from 'react-router-dom'

export default function Home(props) {
    console.log('Loaded Home component')
    return (
        <div>
            <h1>Welcome!</h1>
            <Link to={`/hangman`}>Let's play hangman!</Link>
        </div>
    )
}