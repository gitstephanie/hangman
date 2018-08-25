import {randomWord} from '../lib/game'
export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'

export function newGame() {
  console.log('Started new game', randomWord())
  return {
    type: 'NEW_GAME',
    state: { 
      word : randomWord(),
      guesses: []
    }
  }
}

export function makeGuess(guess) {
  console.log('Made guess', guess)
  return {
    type: 'MAKE_GUESS',
    payload: { 
      GuessInput: guess
    }
  }
}