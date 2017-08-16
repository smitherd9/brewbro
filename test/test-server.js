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
        .get(/v2/)
        .reply(200, {
    "data": {
        "id": "NNAA9F",
        "name": "Brew Ridge Trail Collaboration Ale",
        "nameDisplay": "Brew Ridge Trail Collaboration Ale (2012)",
        "abv": "7.2",
        "availableId": 2,
        "styleId": 65,
        "isOrganic": "N",
        "year": 2012,
        "status": "verified",
        "statusDisplay": "Verified",
        "createDate": "2013-05-05 00:58:14",
        "updateDate": "2013-05-05 13:47:10",
        "available": {
            "id": 2,
            "name": "Limited",
            "description": "Limited availability."
        },
        "style": {
            "id": 65,
            "categoryId": 5,
            "category": {
                "id": 5,
                "name": "Belgian And French Origin Ales",
                "createDate": "2012-03-21 20:06:46"
            },
            "name": "Belgian-Style White (or Wit) / Belgian-Style Wheat",
            "shortName": "Witbier",
            "description": "Belgian white ales are very pale in color and are brewed using unmalted wheat and malted barley and are spiced with coriander and orange peel. Coriander and light orange peel aroma should be perceived as such or as an unidentified spiciness. Phenolic spiciness and yeast flavors may be evident at mild levels. These beers are traditionally bottle conditioned and served cloudy. An unfiltered starch and yeast haze should be part of the appearance. The low to medium body should have some degree of creaminess from wheat starch. The style is further characterized by the use of noble-type hops to achieve low hop bitterness and little to no apparent hop flavor. This beer has no diacetyl and a low to medium fruity-ester level. Mild acidity is appropriate.",
            "ibuMin": "10",
            "ibuMax": "17",
            "abvMin": "4.8",
            "abvMax": "5.2",
            "srmMin": "2",
            "srmMax": "4",
            "ogMin": "1.044",
            "fgMin": "1.006",
            "fgMax": "1.01",
            "createDate": "2012-03-21 20:06:46",
            "updateDate": "2015-04-07 15:32:30"
        }
    },
    "status": "success"
});


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
                res.body.should.have.property('name');
                res.body.should.have.property('abv');
                res.body.should.have.property('id');
                res.body.should.have.property('style');
                res.body.style.should.have.property('name');


                done();
            });
    });

});