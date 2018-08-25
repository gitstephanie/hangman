export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'


export function newGame() {
  return {
    type: 'NEW_GAME',
    payload: 0
  }
}

export function makeGuess() {
  return {
    type: 'MAKE_GUESS',
    payload : 0
  }
}
