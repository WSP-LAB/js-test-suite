load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.6-2gs
description: >
    Strict Mode - arguments.callee cannot be accessed in a strict
    function
flags: [onlyStrict]
---*/

function f_10_6_1_gs(){
    return arguments.callee;
}

assert.throws(TypeError, function() {
    f_10_6_1_gs();
});
