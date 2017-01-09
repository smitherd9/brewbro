const express =  require('express');
const bodyParser = require('body-parser');
const unirest = require('unirest');
const app = express();
const cors = require('cors');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());






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