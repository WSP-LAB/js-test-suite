load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2016 Leonardo Balter. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
  Throws a TypeError if this is not a DateTimeFormat object
---*/

var formatToParts = Intl.DateTimeFormat.prototype.formatToParts;

assert.throws(TypeError, function() {
  formatToParts.call({});
}, "{}");

assert.throws(TypeError, function() {
  formatToParts.call(new Date());
}, "new Date()");
