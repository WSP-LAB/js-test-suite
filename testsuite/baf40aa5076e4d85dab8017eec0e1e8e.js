load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.3.2.1
description: >
  WeakMap.prototype is not writable, not enumerable and not configurable.
includes: [propertyHelper.js]
---*/

verifyNotEnumerable(WeakMap, 'prototype');
verifyNotWritable(WeakMap, 'prototype');
verifyNotConfigurable(WeakMap, 'prototype');
