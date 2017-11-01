import types from '../actions/types';

const DEFAULT_STATE = { background : Math.floor(Math.random() * 22) }

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case types.CHANGE_BACKGROUND:
            return {...state, background: action.payload}
        default:
            return state;
    }
}