/*jslint node: true */
/*global describe, it */
'use strict';

var add = require('../').add;
var expect = require('chai').expect;

describe('add', function () {
    it('adds arguments', function () {
        expect(add()).to.not.be.ok;
        expect(add(1)(2)(3)()).to.be.equal(6);
    });
});