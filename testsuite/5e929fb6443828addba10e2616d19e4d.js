load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-625gs
description: >
    Globally declared variable should take precedence over
    Object.prototype property of the same name
---*/

Object.defineProperty(Object.prototype, 
                      "prop", 
                      { value: 1001, writable: false, enumerable: false, configurable: false} 
                      );
var prop = 1002;

if (! (this.hasOwnProperty("prop") && prop === 1002)) {
    throw "this.prop should take precedence over Object.prototype.prop";
}
