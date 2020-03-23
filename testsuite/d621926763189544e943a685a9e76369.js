load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
load("352fc54052b657308832185e13cd17c9.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.31
description: >
  "@@toStringTag" property of TypedArrayPrototype
info: >
  22.2.3.31 get %TypedArray%.prototype [ @@toStringTag ]

  %TypedArray%.prototype[@@toStringTag] is an accessor property whose set
  accessor function is undefined.
  ...

  This property has the attributes { [[Enumerable]]: false, [[Configurable]]:
  true }.
includes: [propertyHelper.js, testTypedArray.js]
features: [Symbol.toStringTag]
---*/

var TypedArrayPrototype = TypedArray.prototype;
var desc = Object.getOwnPropertyDescriptor(
  TypedArrayPrototype, Symbol.toStringTag
);

assert.sameValue(desc.set, undefined);
assert.sameValue(typeof desc.get, 'function');
verifyNotEnumerable(TypedArrayPrototype, Symbol.toStringTag);
verifyConfigurable(TypedArrayPrototype, Symbol.toStringTag);
