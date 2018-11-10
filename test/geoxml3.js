'use strict';

const assert = require('assert'),
  path = require('path');

global.window = require(path.resolve(path.join(__dirname, 'fixtures/window')));
global.google = require(path.resolve(path.join(__dirname, 'fixtures/google')));

var geoxml3 = require('../lib/geoxml3');

describe('geoXML3', function () {
  it('should create an object', function (done) {
    assert.equal(typeof geoxml3, 'object');
    done();
  });
});
