const mocha = require('mocha');
const chai = require('chai');
const port = process.env.PORT || '8080';
const express = require('express');
var app = require('../app');
const request = require('supertest').agent('http://localhost:' + port);
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

describe('My simple CI', function() {
  it('Should contain Rishi Seetha', function(done) {
    request
      .get('/')
      .expect(200)
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