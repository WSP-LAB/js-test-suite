load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-171-1
description: >
    Object.defineProperty - 'Attributes' is a Date object that uses
    Object's [[Get]] method to access the 'writable' property of
    prototype object (8.10.5 step 6.b)
includes: [propertyHelper.js]
---*/

var obj = {};
try {
    Date.prototype.writable = true;

    var dateObj = new Date();

    Object.defineProperty(obj, "property", dateObj);
    verifyWritable(obj, "property");

} finally {
    delete Date.prototype.writable;
}
