load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Function.constructor
    Function.prototype
    Array.prototype
    String.prototype
    Boolean.prototype
    Number.prototype
    Date.prototype
    RegExp.prototype
    Error.prototype
es5id: 15.2.3.13-2-21
description: >
    Object.isExtensible returns true for all built-in objects
    (Error.prototype)
---*/

  var e = Object.isExtensible(Error.prototype);

assert.sameValue(e, true, 'e');
