const ADD_USER = 'ADD_USER';
const addNewUser = (user) => {
	return {
		type: ADD_USER,
		user: user
		
	}
}


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










// Action Creators 

const getRandomBeer = function(ethnicity) {
    return function(dispatch) {
        var url = new Request('http://localhost:8000/beers/' + ethnicity, 

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
            return dispatch(
                byEthnicitySuccess(data)
            );
        })
        .catch(function(data, err) {
            return dispatch(
                byEthnicityError(data, err)
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
exports.hideModal = hideModal