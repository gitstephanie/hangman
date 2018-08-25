import { NEW_GAME, MAKE_GUESS } from '../actions/game'

export default (state = [], action = {}) => {
    switch (action.type) {
    case NEW_GAME:
        return [
        state,
        action.payload  
        ]
    case MAKE_GUESS:
        return [
        ...state,
        action.payload
      ]
    default:
        return state
    }
}