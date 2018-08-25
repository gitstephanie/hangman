import {randomWord} from '../lib/game'
export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'

export function newGame() {
  console.log('Started new game', randomWord())
  return {
    type: 'NEW_GAME',
    payload: { 
      word : randomWord(),
      guesses: []
    }
  }
}

export function makeGuess(letter) {
  console.log('Made guess', letter)
  return {
    type: 'MAKE_GUESS',
    payload: { 
      letter: letter
    }
  }
}