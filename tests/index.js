/* jshint node:true */
/* global afterEach, describe, it */

var broccoli = require('broccoli');
var fs = require('fs');
var iife = require('..');
var path = require('path');
var should = require('should');

describe('broccoli-iife', function() {
  'use strict';

  var builder;

  afterEach(function() {
    if (builder) {
      builder.cleanup();
    }
  });

  it('wraps code in an IIFE', function() {
    var iifeTree = iife(path.join(__dirname, 'fixtures'));

    builder = new broccoli.Builder(iifeTree);

    return builder.build().then(function(graph) {
      var actual = fs.readFileSync(path.join(graph.directory, 'test.js'), { encoding: 'utf-8' }).trim();
      var expect = fs.readFileSync(path.join(__dirname, 'expected/test.js'), { encoding: 'utf-8' }).trim();

      should(actual).equal(expect);
    });
  });
});
