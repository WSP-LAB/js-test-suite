load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.10-3-11
description: >
    Object.preventExtensions - indexed properties cannot be added into
    an Arguments object
includes: [propertyHelper.js]
---*/

var argObj;
(function () {
    argObj = arguments;
}());

assert(Object.isExtensible(argObj));
Object.preventExtensions(argObj);
assert(!Object.isExtensible(argObj));

verifyNotWritable(argObj, "0", "nocheck");

assert(!argObj.hasOwnProperty("0"));
