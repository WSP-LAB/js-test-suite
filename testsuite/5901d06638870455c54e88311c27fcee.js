load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.5.4_2-67gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict function (strict function declaration called by
    Function.prototype.call(undefined))
flags: [noStrict]
---*/

function f() { "use strict"; gNonStrict();};

assert.throws(TypeError, function() {
    f.call(undefined);
});

function gNonStrict() {
    return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}
