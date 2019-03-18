const assert = require('assert');
const expect = require('chai').expect
const request = require('supertest');
const app = require('../app')
describe('Unit testing the / route', function() {

    it('should return OK status', function() {
      return request(app)
        .get('/')
        .then(function(response){
            assert.equal(response.status, 200)
        })
    });

});


describe('Unit testing the / route', function() {

    it('should return OK status', function() {
      return request(app)
        .get('/pivot')
        .then(function(response){
            assert.equal(response.status, 200)
        })
    });

});

