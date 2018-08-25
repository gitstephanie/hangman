import { NEW_GAME, MAKE_GUESS } from '../actions/game'

export default (state = {}, action = {}) => {
    switch (action.type) {
        case NEW_GAME:
            return (
                action.payload
            )
        case MAKE_GUESS:
            const updatedState = state
            updatedState.guesses.push(action.payload)
            return (
                updatedState
            )
        default:
            return state
    }
}