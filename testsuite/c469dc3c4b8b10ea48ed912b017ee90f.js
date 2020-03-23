load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-360-7
description: >
    ES5 Attributes - Updating indexed data property 'P' whose
    attributes are [[Writable]]: false, [[Enumerable]]: true,
    [[Configurable]]: true to an accessor property, 'O' is the global
    object (8.12.9 - step 9.b.i)
includes: [propertyHelper.js]
---*/

function getFunc() {
        return 20;
    }

var obj = this;
try {
    Object.defineProperty(obj, "0", {
        value: 2010,
        writable: false,
        enumerable: true,
        configurable: true
    });
    var desc1 = Object.getOwnPropertyDescriptor(obj, "0");

    Object.defineProperty(obj, "0", {
        get: getFunc
    });
    var desc2 = Object.getOwnPropertyDescriptor(obj, "0");

    if (!Object.prototype.hasOwnProperty.call(desc1, "value")) {
        $ERROR("Expected to find ownProperty 'value'");
    }

    if (!(desc2.hasOwnProperty("get") && desc2.enumerable === true && 
          desc2.configurable === true && obj[0] === 20 && 
          (typeof desc2.set === "undefined") && desc2.get === getFunc)) {
        $ERROR("Expected desc2 to be as configured.");
    }

    verifyEqualTo(obj, "0", getFunc());

    verifyEnumerable(obj, "0");

    verifyConfigurable(obj, "0");

} finally {
    delete obj[0];
}
