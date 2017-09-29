import types from '../actions/types';

const DEFAULT_STATE = { background : null }

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case types.CHANGE_BACKGROUND:
            return {...state, background: action.payload.data.index}
        default:
            return state;
    }
}