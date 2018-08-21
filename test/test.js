const mocha = require('mocha');
const chai = require('chai');
const express = require('express');
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

var app = require('../app');
const port = process.env.PORT || '8080';
const request = require('supertest').agent('http://localhost:' + port);

describe('My simple CI', function() {
  it('Should contain Rishi Seetha', function(done) {
    request
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(function(err, res) {
        if(err) throw err;
        res.text.should.contain('Rishi Seetha');
        done();
      });
  });
  after(function() {
    app = null;
  });
});