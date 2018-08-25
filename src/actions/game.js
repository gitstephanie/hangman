import {randomWord} from '../lib/game'
export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'

export function newGame(word, guesses) {
  console.log('Started new game', randomWord())
  return {
    type: 'NEW_GAME',
    state: { 
      word : randomWord(),
      guesses: []
    }
  }
}

export function makeGuess(guesses) {
  console.log('Made guess', guesses)
  return {
    type: 'MAKE_GUESS',
    state: { 
      ...guesses
    }
  }
}