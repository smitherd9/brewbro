
// Add a new user to the database

const ADD_USER = 'ADD_USER';
const addNewUser = (user) => {
	return {
		type: ADD_USER,
		user: user
		
	}
}

const ADD_USER_ERROR = 'ADD_USER_ERROR';
const addNewUserError = (user) => {
	return {
		type: ADD_USER_ERROR,
		user: user
		
	}
}


// Validate input forms


const FORM_VALIDATOR = 'FORM_VALIDATOR';
const formValidator = (input) => {
	return {
		type: FORM_VALIDATOR,
		input: input
		
	}
}


// Show or Hide Modal for About description

const SHOW_MODAL = 'SHOW_MODAL';
const showModal = () => {
	return {
		type: SHOW_MODAL		
		
	}
}

const HIDE_MODAL = 'HIDE_MODAL';
const hideModal = () => {
	return {
		type: HIDE_MODAL		
		
	}
}

// Show or Hide Modal for Sign Up form

const SHOW_SIGNUP_MODAL = 'SHOW_SIGNUP_MODAL';
const showSignUpModal = () => {
	return {
		type: SHOW_SIGNUP_MODAL		
		
	}
}

const HIDE_SIGNUP_MODAL = 'HIDE_SIGNUP_MODAL';
const hideSignUpModal = () => {
	return {
		type: HIDE_SIGNUP_MODAL		
		
	}
}


// Make a call to the Brewery DB API for a random beer suggestion

const RANDOM_BEER_SUCCESS = 'RANDOM_BEER_SUCCESS';
const randomBeerSuccess = (response) => {
	return {
		type: RANDOM_BEER_SUCCESS,
		response: response		
		
	}
}

const RANDOM_BEER_ERROR = 'RANDOM_BEER_ERROR';
const randomBeerError = (response, error) => {
	return {
		type: RANDOM_BEER_ERROR,
		response: response,
		error: error		
		
	}
}

const SHOW_LOADING_ANIM = 'SHOW_LOADING_ANIM';
const showLoadingAnim = () => {
	return {
		type: SHOW_LOADING_ANIM
		
	}
}

const SHOW_RANDOM_BEER_BUTTON = 'SHOW_RANDOM_BEER_BUTTON';
const showRandomBeerButton = () => {
	return {
		type: SHOW_RANDOM_BEER_BUTTON
		
	}
}




// Action Creators 

const addUser = function() {
    return function(dispatch) {
        var url = new Request('http://localhost:8000/user', 

        	{method: 'POST', 
        	headers: {
  				'Accept': 'application/json',
  				'Content-Type': 'application/json'
  			}
   		});
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
        console.log(data);            
            return dispatch(
                addNewUser(data)
            );
        })
        .catch(function(data, err) {
            return dispatch(
                addNewUserError(data, err)
            );
        });
    }
};

const getRandomBeer = function() {
    return function(dispatch) {
        var url = new Request('http://localhost:8000/beer/random', 

        	{method: 'GET', 
        	headers: {
  				'Accept': 'application/json',
  				'Content-Type': 'application/json'
  			}
   		});
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
        console.log(data);            
            return dispatch(
                randomBeerSuccess(data)
            );
        })
        .catch(function(data, err) {
            return dispatch(
                randomBeerError(data, err)
            );
        });
    }
};




exports.ADD_USER = ADD_USER;
exports.addNewUser = addNewUser;

exports.FORM_VALIDATOR = FORM_VALIDATOR;
exports.formValidator = formValidator;

exports.SHOW_MODAL = SHOW_MODAL;
exports.showModal = showModal;

exports.HIDE_MODAL = HIDE_MODAL;
exports.hideModal = hideModal;

exports.SHOW_SIGNUP_MODAL = SHOW_SIGNUP_MODAL;
exports.showSignUpModal = showSignUpModal;

exports.HIDE_SIGNUP_MODAL = HIDE_SIGNUP_MODAL;
exports.hideSignUpModal = hideSignUpModal;

exports.getRandomBeer = getRandomBeer;

exports.RANDOM_BEER_SUCCESS = RANDOM_BEER_SUCCESS;
exports.randomBeerSuccess = randomBeerSuccess;

exports.RANDOM_BEER_ERROR = RANDOM_BEER_ERROR;
exports.randomBeerError = randomBeerError;

exports.SHOW_LOADING_ANIM = SHOW_LOADING_ANIM;
exports.showLoadingAnim = showLoadingAnim;

exports.SHOW_RANDOM_BEER_BUTTON = SHOW_RANDOM_BEER_BUTTON;
exports.showRandomBeerButton = showRandomBeerButton;
