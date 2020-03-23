load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise throws TypeError when 'this' is constructed but unsettled promise
es6id: S25.4.3.1_A2.2_T1
author: Sam Mikes
description: Promise.call(new Promise()) throws TypeError
---*/

var p = new Promise(function() {});

assert.throws(TypeError, function () {
    Promise.call(p, function () {});
});
