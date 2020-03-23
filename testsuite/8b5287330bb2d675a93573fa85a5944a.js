load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.1.2.3-2-1
description: >
    pareseFloat - 'trimmedString' is the empty string when inputString
    does not contain any such characters
---*/

assert.sameValue(parseFloat(""), NaN, 'parseFloat("")');
