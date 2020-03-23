load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.9-2-a-3
description: >
    Object.freeze - 'P' is own data property that overrides an
    inherited accessor property
includes: [propertyHelper.js]
---*/

var proto = {};

Object.defineProperty(proto, "foo", {
    get: function () {
        return 0;
    },
    configurable: true
});

var Con = function () { };
Con.prototype = proto;

var child = new Con();
Object.defineProperty(child, "foo", {
    value: 10,
    configurable: true
});

Object.freeze(child);

verifyNotWritable(child, "foo");
verifyNotConfigurable(child, "foo");
assert.sameValue(child.foo, 10);
