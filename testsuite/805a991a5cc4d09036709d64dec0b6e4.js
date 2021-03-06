load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5-13.b-6
description: >
    Function.prototype.bind, 'length' set to remaining number of
    expected args
---*/

    function foo(x, y) { }
    var o = {};

    var bf = foo.bind(o, 42);

assert.sameValue(bf.length, 1, 'bf.length');
