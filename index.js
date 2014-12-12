/* jshint node:true */
'use strict';

var Filter = require('broccoli-filter');

function WrapFilter(inputTree) {
  if (!(this instanceof WrapFilter)) {
    return new WrapFilter(inputTree);
  }

  Filter.call(this, inputTree);
}

WrapFilter.prototype = Object.create(Filter.prototype);
WrapFilter.prototype.constructor = WrapFilter;

WrapFilter.prototype.getDestFilePath = function(relativePath) {
  return relativePath;
};

WrapFilter.prototype.processString = function(string) {
  return '(function() {;\n' + string + '})();';
};

module.exports = WrapFilter;
