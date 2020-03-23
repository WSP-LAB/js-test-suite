load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright 2015 Jordan Harband.  All rights reserved.
// See LICENSE for details.

/*---
es6id: 25.4.4.1_A1.3_T1
author: Jordan Harband
description: Promise.all property descriptor
info: >
    ES6 Section 17

    Every other data property described in clauses 18 through 26 and in Annex
    B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false,
    [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
---*/

verifyNotEnumerable(Promise, 'all');
verifyWritable(Promise, 'all');
verifyConfigurable(Promise, 'all');
