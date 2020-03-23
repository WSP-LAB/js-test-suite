load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 24.1.4.1
esid: sec-get-arraybuffer.prototype.bytelength
description: >
  "byteLength" property of ArrayBuffer.prototype
info: >
  ArrayBuffer.prototype.byteLength is an accessor property whose set accessor
  function is undefined.

  Section 17: Every accessor property described in clauses 18 through 26 and in
  Annex B.2 has the attributes {[[Enumerable]]: false, [[Configurable]]: true }
includes: [propertyHelper.js]
---*/

var desc = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength");

assert.sameValue(desc.set, undefined);
assert.sameValue(typeof desc.get, "function");

verifyNotEnumerable(ArrayBuffer.prototype, "byteLength");
verifyConfigurable(ArrayBuffer.prototype, "byteLength");
