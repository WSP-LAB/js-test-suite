load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 21.2.5.11
description: String coercion of `string` argument
info: >
    [...]
    3. Let S be ToString(string).
    [...]
features: [Symbol.split]
---*/

var obj = {
  toString: function() {
    return 'toString value';
  }
};
var result;

result = / /[Symbol.split](obj);

assert(Array.isArray(result));
assert.sameValue(result.length, 2);
assert.sameValue(result[0], 'toString');
assert.sameValue(result[1], 'value');
