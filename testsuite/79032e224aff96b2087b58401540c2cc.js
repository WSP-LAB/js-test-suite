load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-405
description: >
    ES5 Attributes - Failed to add a property to an object when the
    object's object has a property with same name and [[Writable]]
    attribute is set to false (Number instance)
includes: [propertyHelper.js]
---*/

    Object.defineProperty(Number.prototype, "prop", {
        value: 1001,
        writable: false,
        enumerable: false,
        configurable: true
    });
    
    var numObj = new Number();

    assert(!numObj.hasOwnProperty("prop"));
    verifyNotWritable(numObj, "prop", "noCheckOwnProp");
