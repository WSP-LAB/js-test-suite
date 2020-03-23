load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.4-4-42
description: >
    Object.getOwnPropertyNames - own data property of String object
    'O' is pushed into the returned array
---*/

var propertyFound = false;

        var str = new String("abc");

        Object.defineProperty(str, "ownProperty", {
            value: "ownString",
            configurable: true
        });

        var result = Object.getOwnPropertyNames(str);

        for (var p in result) {
            if (result[p] === "ownProperty") {
                propertyFound = true;
                break;
            }
        }

assert(propertyFound, 'Property not found');
