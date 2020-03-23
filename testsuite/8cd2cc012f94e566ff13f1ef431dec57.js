load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.13-2-25
description: >
    Object.isExtensible returns true if O is extensible and has a
    prototype that is not extensible
---*/

        var proto = {};
        Object.preventExtensions(proto);
      
        var ConstructFun = function () { };
        ConstructFun.prototype = proto;

        var obj = new ConstructFun();

assert(Object.isExtensible(obj), 'Object.isExtensible(obj) !== true');
