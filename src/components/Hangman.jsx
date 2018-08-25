import * as React from 'react'
import {wrongGuessCount} from '../lib/game'

export default function Hangman(props) {

    const hangman = [`
    +---+
    |   |
        |
        |
        |
        |
    =========
    `, 
    `
    +---+
    |   |
    O   |
        |
        |
        |
    =========
    `,
    `
    +---+
    |   |
    O   |
    |   |
        |
        |
    =========
    `, 
    `
    +---+
    |   |
    O   |
    /|  |
        |
        |
    =========
    `, 
    `
    +---+
    |   |
    O   |
    /|\ |
        |
        |
    =========
    `, 
    `
    +---+
    |   |
    O   |
    /|\ |
    /   |
        |
    =========
    `, 
    `
    +---+
    |   |
    O   |
    /|\ |
    / \ |
        |
    =========
    `];

    const hangmanAscii = (hangman,word,guesses) => {
        if (word && guesses) {
            const wrongGuesses = wrongGuessCount(word,guesses)
            return hangman[wrongGuesses]
        } else {
            return hangman[0]
        }
    }

    return (
            <div>
                <pre>{hangmanAscii(hangman,props.word,props.guesses)}</pre>
            </div>
        )
}