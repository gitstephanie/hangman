import * as React from 'react'
import {wrongGuessCount} from '../lib/game'

export default function WrongGuessCounter(props) {
    if (props.word && props.guesses) {
        return (
            <p>{wrongGuessCount(props.word,props.guesses)}</p>
        )
    } else {
        return ''
    }
}