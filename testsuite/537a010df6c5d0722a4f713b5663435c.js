load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.2.2
description: >
    Properties of the Set Constructor

    Besides the length property (whose value is 0)

includes: [propertyHelper.js]
---*/

assert.sameValue(Set.length, 0, "The value of `Set.length` is `0`");

verifyNotEnumerable(Set, "length");
verifyNotWritable(Set, "length");
verifyConfigurable(Set, "length");
