import * as React from 'react'
import {showGuess} from '../lib/game'

export default function PlayingField(props) {
    console.log(props.word, props.guesses)
    if (props.word) {
        return (
            <p>{showGuess(props.word,props.guesses)}</p>
        )
    } else {
        return ''
    }
}