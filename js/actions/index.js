
// Add a new user to the database

const ADD_USER = 'ADD_USER';
const addNewUser = (user) => {
	return {
		type: ADD_USER,
		user: user,
        userName: user.userName
		
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
const formValidator = (inputType, inputValue) => {
	return {
		type: FORM_VALIDATOR,
		inputType: inputType,
        inputValue: inputValue
		
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
const showLoadingAnim = (value) => {
	return {
		type: SHOW_LOADING_ANIM,
        value: value
		
	}
}


const HIDE_LOADING_ANIM = 'HIDE_LOADING_ANIM';
const hideLoadingAnim = (value) => {
    return {
        type: HIDE_LOADING_ANIM,
        value: value
        
    }
}

const RESET_NOW = 'RESET_NOW';
const resetNow = () => {
    return {
        type: RESET_NOW
        
        
    }
}



const TICK = 'TICK';
const tick = () => {
    return {
        type: TICK,
    }
}




// Action Creators 

const addUser = function(name, username, password, email) {
    return function(dispatch) {
        var url = new Request('http://localhost:8000/user', 

        	{method: 'POST', 
        	headers: {
  				'Accept': 'application/json',
  				'Content-Type': 'application/json'
  			},
            body: JSON.stringify({
                name: name,
                username: username,
                password: password,
                email: email
            }) 
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
exports.addUser = addUser;

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

exports.HIDE_LOADING_ANIM = HIDE_LOADING_ANIM;
exports.hideLoadingAnim = hideLoadingAnim;

exports.TICK = TICK;
exports.tick = tick;

exports.RESET_NOW= RESET_NOW;
exports.resetNow = resetNow;


