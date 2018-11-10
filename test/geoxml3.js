'use strict';

const assert = require('assert'),
  path = require('path');

require(path.resolve(path.join(__dirname, 'fixtures/window')));
require(path.resolve(path.join(__dirname, 'fixtures/google')));
var window = global.window,
  google = global.google,
  geoxml3 = require('../lib/geoxml3');
console.log(geoxml3);
describe('geoXML3', function () {
  it('should create an object', function (done) {
    assert.equal(typeof geoxml3, 'object');
    done();
  });
});
