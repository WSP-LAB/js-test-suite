load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-91
description: >
    Object.defineProperties throws TypeError when P.configurable is
    false, both properties.[[Get]] and P.[[Get]] are two objects which
    refer to different objects (8.12.9 step 11.a.ii)
includes: [propertyHelper.js]
---*/


var obj = {};

function set_func(value) {
    obj.setVerifyHelpProp = value;
}
function get_func1() {
    return 10;
}

Object.defineProperty(obj, "foo", {
    get: get_func1,
    set: set_func,
    enumerable: false,
    configurable: false
});

function get_func2() {
    return 20;
}

try {
    Object.defineProperties(obj, {
        foo: {
            get: get_func2
        }
    });
    $ERROR("Expected an exception");
} catch (e) {
    verifyEqualTo(obj, "foo", get_func1());

    verifyWritable(obj, "foo", "setVerifyHelpProp");

    verifyNotEnumerable(obj, "foo");

    verifyNotConfigurable(obj, "foo");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}

