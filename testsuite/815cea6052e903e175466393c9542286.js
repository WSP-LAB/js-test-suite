load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-3-19
description: >
    Array.prototype.indexOf - value of 'length' is an Object which has
    an own toString method.
---*/

        // objects inherit the default valueOf() method from Object
        // that simply returns itself. Since the default valueOf() method
        // does not return a primitive value, ES next tries to convert the object
        // to a number by calling its toString() method and converting the
        // resulting string to a number.

        var obj = {
            1: true,
            2: 2,

            length: {
                toString: function () {
                    return '2';
                }
            }
        };

assert.sameValue(Array.prototype.indexOf.call(obj, true), 1, 'Array.prototype.indexOf.call(obj, true)');
assert.sameValue(Array.prototype.indexOf.call(obj, 2), -1, 'Array.prototype.indexOf.call(obj, 2)');
