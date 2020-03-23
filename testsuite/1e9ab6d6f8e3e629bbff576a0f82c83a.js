load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.9-2-a-1
description: Object.freeze - 'P' is own data property
includes: [propertyHelper.js]
---*/

var obj = {};

obj.foo = 10; // default [[Configurable]] attribute value of foo: true

Object.freeze(obj);

verifyNotWritable(obj, "foo");
verifyNotConfigurable(obj, "foo");

assert.sameValue(obj.foo, 10);
