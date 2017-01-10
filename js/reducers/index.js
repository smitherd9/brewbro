import actions from '../actions/index';
import store from '../store';
import { combineReducers, createStore } from 'redux';

const initialState = {
 	userAdded: false,
 	showModal: false
 	// formInput: ""
}



const BeerReducer = function(state, action) {    
    state = state || initialState;

    if (action.type === actions.NEW_USER) {

    	return Object.assign({}, state, {
            userAdded: true
            


        });
    }


    if (action.type === actions.FORM_VALIDATOR) {

    	return Object.assign({}, state, {
            formInput: action.formInput           

        });
    }


    if (action.type === actions.SHOW_MODAL) {

    	return Object.assign({}, state, {
            showModal: true   

        });
    }

    if (action.type === actions.HIDE_MODAL) {

    	return Object.assign({}, state, {
            showModal: false   

        });
    }

  return state;

};








 export default BeerReducer;