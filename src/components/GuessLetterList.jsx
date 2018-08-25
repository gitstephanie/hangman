import * as React from 'react'

export default function GuessLetterList(props) {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    return (
        <ul>
            {alphabet.map(
                letter =>
                <li key={letter} onClick={() => props.makeGuess(letter)}>
                    {letter}
                </li>
            )}
        </ul>
    );
}