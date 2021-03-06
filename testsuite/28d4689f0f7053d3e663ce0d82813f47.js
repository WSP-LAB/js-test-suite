load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.slice can't be used as constructor
es5id: 15.5.4.13_A7
description: Checking if creating the String.prototype.slice object fails
---*/

var FACTORY = String.prototype.slice;

assert.throws(TypeError, function() {
  new FACTORY;
});
