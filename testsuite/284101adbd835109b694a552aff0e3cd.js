load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 21.2.5.9
description: String coercion of `string` argument
info: >
    [...]
    3. Let S be ToString(string).
    [...]
features: [Symbol.search]
---*/

var obj = {
  toString: function() {
    return 'toString value';
  }
};

assert.sameValue(/ring/[Symbol.search](obj), 4);
