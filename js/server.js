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





MongoClient.connect('mongodb://localhost/', function(err, db) {
    if (err) {
        console.error(err);
        db.close();
        return;
    }
    console.log('Connected to MongoDB database');
    console.log(process.argv);
    db.close();

    var collection = db.collection('beers');

    var create = function(name, content) {
        db.close();
    };

    var read = function(name) {
        db.close();
    };

    var update = function(name, content) {
        db.close();
    };

    var del = function(name, content) {
        db.close();
    };

    var main = function() {
        if (process.argv[2] == 'create') {
            create(process.argv[3], process.argv[4]);
        }
        else if (process.argv[2] == 'read') {
            read(process.argv[3]);
        }
        else if (process.argv[2] == 'update') {
            update(process.argv[3], process.argv[4]);
        }
        else if (process.argv[2] == 'delete') {
            del(process.argv[3]);
        }
        else {
            console.error('Command not recognized');
            db.close();
        }
    };

    main();

});



app.get('/beers/', function(req, res) {
    req.query.beer = req.params.beer;    
    req.query.$$app_token = '9e764e155ee83a9a98485bdf8ccbff50';

        unirest.get('http://api.brewerydb.com/v2/?')
        .query(req.query)

        .end(function(response) {
        // storeInData(response.body);        
        res.json();
        cosole.log(res.json());        

        });
});