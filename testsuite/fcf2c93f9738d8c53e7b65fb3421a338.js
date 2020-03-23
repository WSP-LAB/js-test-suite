load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.5.4_2-26gs
description: >
    Strict mode - checking access to strict function caller from
    strict function (Anonymous FunctionExpression defined within a
    FunctionExpression inside strict mode)
flags: [onlyStrict]
---*/

var f1 = function () {
    (function () {
        gNonStrict();
    })();
}

assert.throws(TypeError, function() {
    f1();
});

function gNonStrict() {
    return gNonStrict.caller;
}
