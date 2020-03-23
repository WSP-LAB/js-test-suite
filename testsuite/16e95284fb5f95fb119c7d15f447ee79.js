load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.11.4.4-6-2
description: >
    Error.prototype.toString - 'Error' is returned when 'name' is
    absent and value of 'msg' is returned when 'msg' is non-empty
    string
---*/

        var errObj = new Error("ErrorMessage");

assert.sameValue(errObj.toString(), "Error: ErrorMessage", 'errObj.toString()');
