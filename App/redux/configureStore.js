import {createStore} from 'redux';
import combineReducers from '../Reducers';



export let store = createStore(combineReducers)