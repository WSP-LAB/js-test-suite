load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-171
description: >
    Object.defineProperties - value of 'writable' property of
    'descObj' is NaN (8.10.5 step 6.b)
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperties(obj, {
    property: {
        writable: NaN
    }
});

assert(obj.hasOwnProperty("property"));
verifyNotWritable(obj, "property");

