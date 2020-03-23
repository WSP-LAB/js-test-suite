load("924921a1ecafccfb4db6dd25ea7b14f2.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-@@iterator
es6id: 26.3.2
description: Property descriptor
info: >
    ES6 Section 17

    Every other data property described in clauses 18 through 26 and in Annex
    B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false,
    [[Configurable]]: true } unless otherwise specified.
flags: [module]
includes: [propertyHelper.js]
features: [Symbol.iterator]
---*/

import * as ns from './list-iter-next-prop-desc.js';
var iter = ns[Symbol.iterator]();

assert.sameValue(typeof iter.next, 'function');
verifyNotEnumerable(iter, 'next');
verifyWritable(iter, 'next');
verifyConfigurable(iter, 'next');
