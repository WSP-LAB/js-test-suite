load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.3-11-7
description: JSON.stringify correctly works on top level Number objects.
---*/

assert.sameValue(JSON.stringify(new Number(42)), '42', 'JSON.stringify(new Number(42))');
