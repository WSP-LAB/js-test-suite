load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-addition-operator-plus
es6id: 12.7.3
description: Symbol value cannot be converted to a String
info: |
    [...]
    7. If Type(lprim) is String or Type(rprim) is String, then
       a. Let lstr be ? ToString(lprim).
features: [Symbol]
---*/

var s = Symbol('66');
assert.throws(TypeError, function() {
  s + '';
});
