load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-179
description: >
    Object.create - 'writable' property of one property in
    'Properties' is not present (8.10.5 step 6)
includes: [propertyHelper.js]
---*/

var newObj = Object.create({}, {
    prop: {
        value: 100
    }
});

assert.sameValue(newObj.prop, 100);
verifyNotWritable(newObj, "prop");
