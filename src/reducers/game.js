import { NEW_GAME, MAKE_GUESS } from '../actions/game'

export default (state = {}, action = {}) => {
    switch (action.type) {
        case NEW_GAME:
            return (
                action.payload
            )
        case MAKE_GUESS:
            return {
                ...state,
                guesses: state.guesses.concat([action.payload])
            }
        default:
            return state
    }
}