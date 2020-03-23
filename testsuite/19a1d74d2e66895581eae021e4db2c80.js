load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-2-47
description: >
    Object.getOwnPropertyDescriptor - uses inherited toString method
    when 'P' is an object with an own valueOf and inherited toString
    methods
---*/

        var proto = {};
        var valueOfAccessed = false;
        var toStringAccessed = false;

        proto.toString = function () {
            toStringAccessed = true;
            return "test";
        };

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        child.valueOf = function () {
            valueOfAccessed = true;
            return "10";
        };
        var obj = { "10": "length1", "test": "length2" };
        var desc = Object.getOwnPropertyDescriptor(obj, child);

assert.sameValue(desc.value, "length2", 'desc.value');
assert(toStringAccessed, 'toStringAccessed !== true');
assert.sameValue(valueOfAccessed, false, 'valueOfAccessed');
