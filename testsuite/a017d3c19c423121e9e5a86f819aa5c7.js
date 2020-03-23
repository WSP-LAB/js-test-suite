load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.7
description: >
    Throws a TypeError exception if trap is not callable.
info: >
    [[HasProperty]] (P)

    ...
    6. Let trap be GetMethod(handler, "has").
    ...
        7.3.9 GetMethod (O, P)
        ...
        2. Let func be GetV(O, P).
        5. If IsCallable(func) is false, throw a TypeError exception.
        ...
flags: [noStrict]
---*/

var target = {};
var p = new Proxy(target, {
    has: {}
});

assert.throws(TypeError, function() {
    with (p) {
        (attr);
    }
});
