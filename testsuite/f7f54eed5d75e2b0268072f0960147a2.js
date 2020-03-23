load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2017 Caio Lima. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Mapped arguments object with non-configurable property property descriptor behavior
info: >
    Descriptor of a mapped value is updated when property is made non-configurable.
flags: [noStrict]
esid: sec-arguments-exotic-objects-defineownproperty-p-desc
includes: [propertyHelper.js]
---*/

function argumentsNonConfigurable(a) {
  Object.defineProperty(arguments, "0", {configurable: false});

  let propertyDescriptor = Object.getOwnPropertyDescriptor(arguments, "0");
  assert.sameValue(propertyDescriptor.value, 1);
  verifyEnumerable(arguments, "0");
  verifyWritable(arguments, "0");
  verifyNotConfigurable(arguments, "0");
}
argumentsNonConfigurable(1);
