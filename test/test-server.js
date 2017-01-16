import React from 'react';
import TestUtils from 'react-addons-test-utils';
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../js/server.js');
var nock = require('nock');

var should = chai.should();
var expect = chai.expect();
chai.use(chaiHttp);
chai.use(require('chai-things'));
var app = server.app;



describe('/beer/random', () => {

    nock(/api\.brewerydb\.com/)
        .get(/resource/)
        .reply(200, [{
        	"name": "Hitachino Nest Celebration Ale 2006",
        	"abv": "9"		

        }]);



     it('should return status code 200 and json on GET', function(done) {
        chai.request(app)
            .get('/beer/random/')
            .end(function(err, res) {
                if (err) {
                    return res.status(404).json({
                        message: 'Not Found'
                    });
                }
                console.log(res.body);
                res.should.have.status(200);
                res.should.be.json;       
                res.body.should.be.a('object');
                res.body.should.all.have.property('name');
                res.body.should.all.have.property('abv');


                done();
            });
    });

});