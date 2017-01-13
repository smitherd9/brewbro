import actions from '../actions/index';
import store from '../store';
import { combineReducers, createStore } from 'redux';

const initialState = {
 	userAdded: false,
 	showModal: false,
 	showSignUpModal: false,
 	randomBeer: null,
 	userLoggedIn: false
}



const BeerReducer = function(state, action) {    
    state = state || initialState;

    if (action.type === actions.ADD_USER) {

    	return Object.assign({}, state, {
            userAdded: true,
            userLoggedIn: true
            


        });
    }

    if (action.type === actions.ADD_USER_ERROR) {

    	return Object.assign({}, state, {
            userAdded: false
            


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

    if (action.type === actions.SHOW_SIGNUP_MODAL) {

    	return Object.assign({}, state, {
            showSignUpModal: true 

        });
    }

    if (action.type === actions.HIDE_SIGNUP_MODAL) {

    	return Object.assign({}, state, {
            showSignUpModal: false

        });
    }

    if (action.type === actions.RANDOM_BEER_SUCCESS) {

    	return Object.assign({}, state, {
            randomBeer: action.response   

        });
    }


    if (action.type === actions.RANDOM_BEER_ERROR) {

    	return Object.assign({}, state, {
            randomBeer: action.error   

        });
    }


  return state;

};








 export default BeerReducer;