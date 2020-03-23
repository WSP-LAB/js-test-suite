load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
 GeneratorMethod can reference SuperProperty in arg
es6id: 14.4.1
author: Sam Mikes
description: GeneratorMethod uses SuperProperty (allowed)
features: [ default-arg, generators, super ]
---*/

var obj = {
  *foo(a = super.toString) {
    return a;
  }
};

obj.toString = null;

assert.sameValue(obj.foo().next().value, Object.prototype.toString);
