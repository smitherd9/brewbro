import redux from 'redux';
import { combineReducers, createStore } from 'redux';
import actions from './actions/index';
import BeerReducer from './reducers/index';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';



const store = createStore(BeerReducer, applyMiddleware(thunk));


console.log(store.getState());


export default store;