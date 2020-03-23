load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-symbol.unscopables
es6id: 19.4.2.14
description: Value shared by all realms
info: >
  Unless otherwise specified, well-known symbols values are shared by all
  realms.
features: [Symbol.unscopables]
---*/

var OSymbol = $.createRealm().global.Symbol;

assert.sameValue(Symbol.unscopables, OSymbol.unscopables);
