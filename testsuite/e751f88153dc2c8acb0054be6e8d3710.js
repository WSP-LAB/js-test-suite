load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-1-2
description: Array.prototype.map - applied to null
---*/


assert.throws(TypeError, function() {
            Array.prototype.map.call(null); // TypeError is thrown if value is null
});
