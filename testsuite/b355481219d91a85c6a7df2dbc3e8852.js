load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 Mike Pennisi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.3.31
description: >
    Property descriptor for initial value of `Symbol.unscopables` property
info: >
    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [Symbol.unscopables]
---*/

verifyNotEnumerable(Array.prototype, Symbol.unscopables);
verifyNotWritable(Array.prototype, Symbol.unscopables);
verifyConfigurable(Array.prototype, Symbol.unscopables);
