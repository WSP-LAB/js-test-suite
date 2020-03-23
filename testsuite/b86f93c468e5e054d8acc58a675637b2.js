load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-86-1
description: >
    Object.defineProperties will not throw TypeError when
    P.configurable is false, both properties.[[Set]] and P.[[Set]] are
    two objects which refer to the same object and the object has been
    updated after defined(8.12.9 step 11.a.i)
includes: [propertyHelper.js]
---*/


var obj = {};

var set_func = function (value) {
    obj.setVerifyHelpProp = value;
};

Object.defineProperty(obj, "foo", {
    set: set_func,
    configurable: false
});

set_func = function (value) {
    obj.setVerifyHelpProp1 = value;
};

try {
    Object.defineProperties(obj, {
        foo: {
            set: set_func
        }
    });
} catch (e) {
    verifyWritable(obj, "foo", "setVerifyHelpProp");

    verifyNotEnumerable(obj, "foo");

    verifyNotConfigurable(obj, "foo");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
