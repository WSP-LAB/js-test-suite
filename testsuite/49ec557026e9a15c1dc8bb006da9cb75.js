load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-3-21
description: >
    Array.prototype.indexOf - 'length' is an object that has an own
    valueOf method that returns an object and toString method that
    returns a string
---*/

        var toStringAccessed = false;
        var valueOfAccessed = false;

        var obj = {
            1: true,
            length: {
                toString: function () {
                    toStringAccessed = true;
                    return '2';
                },

                valueOf: function () {
                    valueOfAccessed = true;
                    return {};
                }
            }
        };

assert.sameValue(Array.prototype.indexOf.call(obj, true), 1, 'Array.prototype.indexOf.call(obj, true)');
assert(toStringAccessed, 'toStringAccessed !== true');
assert(valueOfAccessed, 'valueOfAccessed !== true');
