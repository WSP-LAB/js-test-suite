load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-b-ii-11
description: >
    Array.prototype.lastIndexOf - both array element and search
    element are Objects, and they refer to the same object
---*/

        var obj1 = {};
        var obj2 = {};
        var obj3 = obj2;

assert.sameValue([obj2, obj1].lastIndexOf(obj3), 0, '[obj2, obj1].lastIndexOf(obj3)');
