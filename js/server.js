const express =  require('express');
const bodyParser = require('body-parser');
const unirest = require('unirest');
const MongoClient = require('mongodb').MongoClient;
// import { MongoClient } from 'mongodb';
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());


const BeerResponse = {
	randomBeer: []
};




// MongoClient.connect('mongodb://localhost/', function(err, db) {
//     if (err) {
//         console.error(err);
//         db.close();
//         return;
//     }
//     console.log('Connected to MongoDB database');
//     console.log(process.argv);
//     db.close();

//     var collection = db.collection('beers');

//     var create = function(name, content) {
//         db.close();
//     };

//     var read = function(name) {
//         db.close();
//     };

//     var update = function(name, content) {
//         db.close();
//     };

//     var del = function(name, content) {
//         db.close();
//     };

//     var main = function() {
//         if (process.argv[2] == 'create') {
//             create(process.argv[3], process.argv[4]);
//         }
//         else if (process.argv[2] == 'read') {
//             read(process.argv[3]);
//         }
//         else if (process.argv[2] == 'update') {
//             update(process.argv[3], process.argv[4]);
//         }
//         else if (process.argv[2] == 'delete') {
//             del(process.argv[3]);
//         }
//         else {
//             console.error('Command not recognized');
//             db.close();
//         }
//     };

//     main();

// });



app.get('/beer/random', function(req, res) {
    // req.query.beer = req.params.beer;
    // req.query.beer = '/beer/random';     
    req.query.key = '9e764e155ee83a9a98485bdf8ccbff50';
    	console.log('req.query: ' + req.query);
        unirest.get('http://api.brewerydb.com/v2/' + '/random?')
        .query(req.query)

        .end(function(response) {
        pushToRandomBeer(response.body);               
        res.json(BeerResponse.randomBeer);              

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