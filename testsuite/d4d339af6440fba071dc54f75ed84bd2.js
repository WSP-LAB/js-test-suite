load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 21.1.2.2
description: >
  String.fromCodePoint.name
info: >
  String.fromCodePoint ( ...codePoints )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/

assert.sameValue(
  String.fromCodePoint.name, 'fromCodePoint',
  'The value of `String.fromCodePoint.name` is "fromCodePoint"'
);

verifyNotEnumerable(String.fromCodePoint, 'name');
verifyNotWritable(String.fromCodePoint, 'name');
verifyConfigurable(String.fromCodePoint, 'name');
