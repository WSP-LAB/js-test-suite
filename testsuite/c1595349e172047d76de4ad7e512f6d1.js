load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-37
description: >
    Object.create - 'Properties' is an Error object that uses Object's
    [[Get]] method to access own enumerable property (15.2.3.7 step
    5.a)
---*/

        var props = new Error("test");

        (Object.getOwnPropertyNames(props)).forEach(function(name){
            props[name] = {value:11, configurable:true}
        });

        props.prop15_2_3_5_4_37 = {
            value: 12,
            enumerable: true
        };
        var newObj = Object.create({}, props);

assert(newObj.hasOwnProperty("prop15_2_3_5_4_37"), 'newObj.hasOwnProperty("prop15_2_3_5_4_37") !== true');
