load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.10-3-5-1
description: >
    Object.preventExtensions - indexed properties cannot be added into
    a String object
includes: [propertyHelper.js]
---*/

var obj = new String("bbq");

assert(Object.isExtensible(obj));
Object.preventExtensions(obj);
assert(!Object.isExtensible(obj));

verifyNotWritable(obj, "10", "nocheck");

assert(!obj.hasOwnProperty("10"));
