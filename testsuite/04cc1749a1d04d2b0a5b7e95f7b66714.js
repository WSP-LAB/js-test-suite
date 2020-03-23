load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.2.3.6
description: >
    The value of the name property of this function is "[Symbol.hasInstance]".

    17 ECMAScript Standard Built-in Objects
features: [Symbol.hasInstance]
includes: [propertyHelper.js]
---*/

assert.sameValue(
  Function.prototype[Symbol.hasInstance].name, '[Symbol.hasInstance]'
);

verifyNotEnumerable(Function.prototype[Symbol.hasInstance], 'name');
verifyNotWritable(Function.prototype[Symbol.hasInstance], 'name');
verifyConfigurable(Function.prototype[Symbol.hasInstance], 'name');
