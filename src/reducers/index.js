import { combineReducers } from 'redux';
import todos from './todos_reducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({ 
    todos : todos,
    form : formReducer
});