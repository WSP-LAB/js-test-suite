load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5-15-3
description: >
    Function.prototype.bind - The [[Writable]] attribute of length
    property in F set as false
includes: [propertyHelper.js]
---*/

function foo() { }
var obj = foo.bind({});
var flength = obj.length;

assert(obj.hasOwnProperty("length"));
verifyNotWritable(obj, "length", null, 100);
assert.sameValue(obj.length, flength);
