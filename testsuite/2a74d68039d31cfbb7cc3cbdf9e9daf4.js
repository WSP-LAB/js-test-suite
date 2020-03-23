load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    In the absence of the "use strict" directive, generator functions declared
    as methods obey "global" ThisMode semantics.
es6id: 14.4.13
flags: [noStrict]
features: [generators]
---*/

var global = (function() { return this; }());
var thisValue = null;
var method = {
  *method() {
    thisValue = this;
  }
}.method;

method().next();

assert.sameValue(thisValue, global);
