load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.9-2-a-2
description: >
    Object.freeze - 'P' is own data property that overrides an
    inherited data property
includes: [propertyHelper.js]
---*/


var proto = { foo: 0 }; // default [[Configurable]] attribute value of foo: true

var Con = function () { };
Con.prototype = proto;

var child = new Con();

child.foo = 10; // default [[Configurable]] attribute value of foo: true

Object.freeze(child);

verifyNotWritable(child, "foo");
verifyNotConfigurable(child, "foo");

assert.sameValue(child.foo, 10);
