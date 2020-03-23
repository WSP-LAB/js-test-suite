load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.14
description: >
    Return abrupt from constructor call.
info: >
    [[Construct]] ( argumentsList, newTarget)

    9. Let newObj be Call(trap, handler, «target, argArray, newTarget »).
    10. ReturnIfAbrupt(newObj).
---*/

function Target() {}
var P = new Proxy(Target, {
    construct: function() {
        throw new Test262Error();
    }
});

assert.throws(Test262Error, function() {
    new P();
});
