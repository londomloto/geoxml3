'use strict';

const assert = require('assert'),
  path = require('path');

global.window = require(path.resolve(path.join(__dirname, 'fixtures/window')));
global.google = require(path.resolve(path.join(__dirname, 'fixtures/google')));

var MultiGeometry = require('../lib/MultiGeometry');
var GeoXML3 = require('../lib/GeoXML3');

describe('geoXML3', function () {
  it('should create an object', function (done) {
    assert.equal(typeof GeoXML3, 'object');
    done();
  });
});
