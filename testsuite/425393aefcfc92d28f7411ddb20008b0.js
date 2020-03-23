load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-2-16
description: >
    Object.defineProperties - argument 'Properties' is the Arguments
    object
---*/

        var obj = {};
        var result = false;

        var Fun = function () {
            return arguments;
        };        
        var props = new Fun();

        Object.defineProperty(props, "prop", {
            get: function () {
                result = ('[object Arguments]' === Object.prototype.toString.call(this));
                return {};
            },
            enumerable: true
        });

        Object.defineProperties(obj, props);

assert(result, 'result !== true');
