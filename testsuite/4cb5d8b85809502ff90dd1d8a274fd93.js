load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.11.4.4-9-1
description: >
    Error.prototype.toString return 'name' when 'name' is non-empty
    string and 'msg' is empty string
---*/

        var errObj = new Error();
        errObj.name = "ErrorName";

assert.sameValue(errObj.toString(), "ErrorName", 'errObj.toString()');
