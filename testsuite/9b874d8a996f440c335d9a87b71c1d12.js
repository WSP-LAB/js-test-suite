load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.3.3.6
description: >
    `Symbol.toStringTag` property descriptor
info: >
    The initial value of the @@toStringTag property is the String value
    "WeakMap".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [Symbol.toStringTag]
---*/

assert.sameValue(WeakMap.prototype[Symbol.toStringTag], 'WeakMap');

verifyNotEnumerable(WeakMap.prototype, Symbol.toStringTag);
verifyNotWritable(WeakMap.prototype, Symbol.toStringTag);
verifyConfigurable(WeakMap.prototype, Symbol.toStringTag);
