load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6.1.2-16-s
description: >
    SyntaxError isn't thrown when '_implements' occurs
---*/

        var _implements = 1;

assert.sameValue(_implements, 1, '_implements');
