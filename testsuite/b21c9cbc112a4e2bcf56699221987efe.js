load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.11.4.4-8-2
description: >
    Error.prototype.toString return empty string when 'name' is empty
    string and 'msg' is undefined
---*/

var errObj = new Error();
errObj.name = "";
if (errObj.name !== "") {
    $ERROR("Expected errObj.name to be '', actually " + errObj.name);
}
if (errObj.toString() !== "") {
    $ERROR("Expected errObj.toString() to be '', actually " + errObj.toString());
}
