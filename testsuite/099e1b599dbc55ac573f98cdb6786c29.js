load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 21.1.3.3
description: >
  String.prototype.codePointAt.length value and descriptor.
info: >
  21.1.3.3 String.prototype.codePointAt ( pos )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  String.prototype.codePointAt.length, 1,
  'The value of `String.prototype.codePointAt.length` is `1`'
);

verifyNotEnumerable(String.prototype.codePointAt, 'length');
verifyNotWritable(String.prototype.codePointAt, 'length');
verifyConfigurable(String.prototype.codePointAt, 'length');
