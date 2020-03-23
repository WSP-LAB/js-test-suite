load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.8
description: >
    Trap returns abrupt.
info: >
    [[Get]] (P, Receiver)

    9. Let trapResult be Call(trap, handler, «target, P, Receiver»).
    10. ReturnIfAbrupt(trapResult).
---*/

var p = new Proxy({}, {
    get: function() {
        throw new Test262Error();
    }
});

assert.throws(Test262Error, function() {
    p.attr;
});

assert.throws(Test262Error, function() {
    p["attr"];
});
