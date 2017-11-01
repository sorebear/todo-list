import types from '../actions/types';

const DEFAULT_STATE = { background : Math.floor(Math.random() * 16) }

export default (state = DEFAULT_STATE, action) => {
    console.log("Current Background: ", action.payload)
    switch(action.type) {
        case types.CHANGE_BACKGROUND:
            return {...state, background: action.payload}
        default:
            return state;
    }
}