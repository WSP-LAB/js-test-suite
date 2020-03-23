load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.7
description: >
    Trap returns abrupt. Using `prop in obj`.
info: >
    [[HasProperty]] (P)

    ...
    9. Let booleanTrapResult be ToBoolean(Call(trap, handler, «target, P»)).
    10. ReturnIfAbrupt(booleanTrapResult).
    ...
---*/

var p = new Proxy({}, {
    has: function() {
        throw new Test262Error();
    }
});

assert.throws(Test262Error, function() {
    "attr" in p;
});
