load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("9943750f07ea537be5f5aa14a5f7b1b7.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-additional-properties-of-the-object.prototype-object
es6id: B.2.2.1.2
description: Property descriptor for Object.prototype.__proto__
info: >
    Object.prototype.__proto__ is an accessor property with attributes {
    [[Enumerable]]: false, [[Configurable]]: true }. The [[Get]] and [[Set]]
    attributes are defined as follows:
includes: [propertyHelper.js]
---*/

var desc = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');

verifyNotEnumerable(Object.prototype, '__proto__');
verifyConfigurable(Object.prototype, '__proto__');

assert.sameValue(desc.value, undefined, '`value` property');
assert.sameValue(typeof desc.get, 'function', '`get` property');
assert.sameValue(typeof desc.set, 'function', '`set` property');
