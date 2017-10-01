import types from '../actions/types';

const DEFAULT_STATE = { background : 0 }

export default (state = DEFAULT_STATE, action) => {
    console.log("Action in Reducer: ", action)
    switch(action.type) {
        case types.CHANGE_BACKGROUND:
            return {...state, background: action.payload}
        default:
            return state;
    }
}