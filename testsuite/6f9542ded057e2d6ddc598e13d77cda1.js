load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.14
description: >
    Throws if trap is not callable.
---*/

function Target() {}
var p = new Proxy(Target, {
    construct: {}
});

assert.throws(TypeError, function() {
    new p();
});
