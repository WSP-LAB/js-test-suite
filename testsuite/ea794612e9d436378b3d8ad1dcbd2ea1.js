load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.9-2-d-6
description: Object.freeze - 'O' is a Date object
---*/

        var dateObj = new Date();

        Object.freeze(dateObj);

assert(Object.isFrozen(dateObj), 'Object.isFrozen(dateObj) !== true');
