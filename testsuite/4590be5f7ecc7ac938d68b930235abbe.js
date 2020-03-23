load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.5.4_2-96gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict property (FunctionDeclaration includes strict directive
    prologue)
flags: [noStrict]
---*/

var o = { 
    get gNonStrict() {
        var tmp = Object.getOwnPropertyDescriptor(o, "gNonStrict").get;
        return tmp.caller || tmp.caller.throwTypeError;
    }
};


function f() {
    "use strict";
    return o.gNonStrict;
}

assert.throws(TypeError, function() {
    f();
});
