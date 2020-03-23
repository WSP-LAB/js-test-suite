load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Generator objects should define a `length` property.
includes: [propertyHelper.js]
es6id: 25.2.4
---*/

var g = function*() {};

assert.sameValue(g.length, 0);
verifyNotEnumerable(g, 'length');
verifyNotWritable(g, 'length');
verifyConfigurable(g, 'length');