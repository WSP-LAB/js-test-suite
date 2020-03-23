load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.4.3.2
description: >
    toString operations on Symbols
---*/
assert.sameValue(
  String(Symbol('66')),
  'Symbol(66)',
  "`String(Symbol('66'))` returns `'Symbol(66)'`"
)
assert.sameValue(
  Symbol('66').toString(),
  'Symbol(66)',
  "`Symbol('66').toString()` returns `'Symbol(66)'`"
);
assert.sameValue(
  Object(Symbol('66')).toString(),
  'Symbol(66)',
  "`Object(Symbol('66')).toString()` returns `'Symbol(66)'`"
);
assert.sameValue(
  Symbol.prototype.toString.call(Symbol('66')),
  'Symbol(66)',
  "`Symbol.prototype.toString.call(Symbol('66'))` returns `'Symbol(66)'`"
);
