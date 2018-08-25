import * as React from 'react'

export default function NewGameButton(props) {
    console.log('Loaded NewGame component')
    return (
        <div>
            <button onClick={event => props.newGame()}>New Game</button>
        </div>
    )
}