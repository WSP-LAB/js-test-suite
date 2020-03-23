load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.1.3.3
description: >
  Map.prototype.delete.name value and descriptor.
info: >
  Map.prototype.delete ( key )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  Map.prototype.delete.name, 'delete',
  'The value of `Map.prototype.delete.name` is `"delete"`'
);

verifyNotEnumerable(Map.prototype.delete, 'name');
verifyNotWritable(Map.prototype.delete, 'name');
verifyConfigurable(Map.prototype.delete, 'name');
