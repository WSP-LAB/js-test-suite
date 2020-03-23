load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-420
description: >
    ES5 Attributes - Failed to add a property to an object when the
    object's prototype has a property with the same name and
    [[Writable]] set to false(Function.prototype.bind)
includes: [propertyHelper.js]
---*/

var foo = function () { };

    Object.defineProperty(Function.prototype, "prop", {
        value: 1001,
        writable: false,
        enumerable: false,
        configurable: true
    });

    var obj = foo.bind({});
    assert(!obj.hasOwnProperty("prop"));
    verifyNotWritable(foo, "prop", "noCheckOwnProp");
