load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2014 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Array.prototype.splice sets `length` on `this`
es5id: 15.4.4.12_A6.1_T3
description: Array.prototype.splice throws if `length` is read-only
---*/

var a = { 
    get length() { return 0; },
    splice: Array.prototype.splice 
};

try {
    a.splice(1, 2, 4);
    $ERROR("Expected a TypeError");
} catch (e) {
    if (!(e instanceof TypeError)) {
        throw e;
    }
}
