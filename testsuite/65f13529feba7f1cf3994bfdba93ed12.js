load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-53-s
description: >
    Strict Mode - checking 'this' (Anonymous FunctionExpression with a
    strict directive prologue defined within an Anonymous
    FunctionExpression)
flags: [noStrict]
---*/

var global = this;

(function () {
    assert.sameValue((function () {
        "use strict";
        return typeof this;
    })(), "undefined");
    assert.sameValue(this, global, 'this');
})();
