load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.3-11-4
description: JSON.stringify correctly works on top level Number values.
---*/

assert.sameValue(JSON.stringify(123), '123', 'JSON.stringify(123)');
