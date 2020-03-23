load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.5.4_2-50gs
description: >
    Strict mode - checking access to strict function caller from
    strict function (Literal setter defined within strict mode)
flags: [onlyStrict]
---*/

var o = { set foo(stuff) { gNonStrict(); } }

assert.throws(TypeError, function() {
    o.foo = 7;
});

function gNonStrict() {
    return gNonStrict.caller;
}
