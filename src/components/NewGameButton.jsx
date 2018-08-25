import * as React from 'react'

export default function NewGameButton(props) {
    return (
        <div>
            <button onClick={event => props.newGame()}>New Game</button>
        </div>
    )
}