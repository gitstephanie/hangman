import { NEW_GAME, MAKE_GUESS } from '../actions/game'

export default (state = [], action = {}) => {
    switch (action.type) {
    case NEW_GAME:
        return state
    case MAKE_GUESS:
        return action.payload
    default:
        return state
    }
}