const request = require('supertest');
var app = require('../app.js');

describe('GET /api/v01', function() {
    it('respond with hello world', function(done) {
        request(app).get('/api/v01').expect('hello world', done);
    });
});