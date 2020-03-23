load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 21.1.3.13
description: >
  String.prototype.repeat.name value and descriptor.
info: >
  21.1.3.13 String.prototype.repeat ( count )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  String.prototype.repeat.name, 'repeat',
  'The value of `String.prototype.repeat.name` is `"repeat"`'
);

verifyNotEnumerable(String.prototype.repeat, 'name');
verifyNotWritable(String.prototype.repeat, 'name');
verifyConfigurable(String.prototype.repeat, 'name');
