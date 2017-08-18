import actions from '../actions/index';
import store from '../store';
import { combineReducers, createStore } from 'redux';

const initialState = {
 	userAdded: false,
 	showModal: false,
 	showSignUpModal: false,
 	showLoadingAnim: false,
 	randomBeer: null,
 	userLoggedIn: false,
 	userName: "",
    now: 0

}



const BeerReducer = function(state, action) {    
    state = state || initialState;

    if (action.type === actions.ADD_USER) {

    	return Object.assign({}, state, {
            userAdded: true,
            userLoggedIn: true,
            userName: actions.user.userName        

        });
    }

    if (action.type === actions.ADD_USER_ERROR) {

    	return Object.assign({}, state, {
            userAdded: false

        });
    }


    if (action.type === actions.FORM_VALIDATOR) {
        let obj = {}
        obj[action.inputType] = action.inputValue
    	return Object.assign({}, state, obj);
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

    if (action.type === actions.SHOW_LOADING_ANIM) {

    	return Object.assign({}, state, {
            showLoadingAnim: true  

        });
    }

    if (action.type === actions.HIDE_LOADING_ANIM) {

        return Object.assign({}, state, {
            showLoadingAnim: false  

        });
    }

    if(action.type === actions.TICK){
        return Object.assign({}, state, {
            now: state.now + Math.floor((Math.random() * 100) + 2)
        });
    }

    if(action.type === actions.RESET_NOW){
        return Object.assign({}, state, {
            now: 0
        });
    }


  return state;

};








 export default BeerReducer;