import actions from '../actions/index';
import store from '../store';
import { combineReducers, createStore } from 'redux';

const initialState = {
 
}



const BeerReducer = function(state, action) {    
    state = state || initialState;

    if (action.type === actions.BEER) {

    	return Object.assign({}, state, {
            response: action.response
            


        });
    }

  return state;

};








 export default BeerReducer;