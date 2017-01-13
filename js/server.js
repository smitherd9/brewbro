

const express =  require('express');
const bodyParser = require('body-parser');
const unirest = require('unirest');
// const MongoClient = require('mongodb').MongoClient;
// import { MongoClient } from 'mongodb';
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
mongoose.Promise = global.Promise;      // using global promise lib from Node
const User = require('./users');


const BeerResponse = {
	randomBeer: []
};




mongoose.connect('mongodb://localhost/beers').then(function(err, db) {        // will make dir automatically
    if (err) {
        console.error(err);
        db.close()

        return;
    }
    console.log('Connected to MongoDB database');
    console.log(process.argv);

});



// Endpoints for CRUD Operations regarding Users

app.get('/user', function(req, res) {
	User.find(function(err, users){
		if (err) {
            return res.status(500).json({
            message: 'Internal Server Error'
            });
        }
		res.json(users);
	});
});

app.post('/user', function(req, res) {
	User.create({

	}, function(err, user) {
		if (err) {
			return res.status(500).json({
                message: 'Internal Server Error'
            });
		}
		res.status(201).json(user);
	});

});

app.put('/user/:id', function(req, res){
	User.findOneAndRemove({
		_id: req.params.id
	}, function(err, user){
		if (err) {
			return res.status(500).json({
                message: 'Internal Server Error'
            });
		}
		res.status(200).json(user);
	});

});


app.put('/user/:id', function(req, res){
	User.findOneAndUpdate({
		_id: req.params.id
	}, {
		name: req.body.name
	}, function(err, item) {
		if (err) {
			return res.status(500).json({
                message: 'Internal Server Error'
            });
		}
		res.status(200).json(user);
	});



});



// use post for add a new user 
// use put for edit user
// use delete for delete user
// users need to be able to store their preferences   Get beer types from brewery db 



app.get('/beer/random', function(req, res) {
    // req.query.beer = req.params.beer;
    // req.query.beer = '/beer/random';     
    req.query.key = '9e764e155ee83a9a98485bdf8ccbff50';
    	console.log(req.query);
        unirest.get('http://api.brewerydb.com/v2/beer/random?' )
        .query(req.query)

        .end(function(response) {
        	console.log(response.body);
        // pushToRandomBeer(response.body.data);               
        res.json(response.body.data);              

        });
});




const pushToRandomBeer = function(response) {
    console.log('response.length in pushToRandomBeer: ' + response.length);
    BeerResponse.randomBeer = [];    
        
        
        if (response.hasOwnProperty('data')) {
         // && (response.hasOwnProperty('data.style'))) {

            BeerResponse.randomBeer.push(
                response
                // 'style': response.data.style
            );
        }
    

    console.log('BeerResponse.randomBeer.data in pushToRandomBeer: ' + BeerResponse.randomBeer.response);

       

};







exports.app = app;

app.listen(process.env.PORT || 8000);