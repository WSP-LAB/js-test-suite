load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 26.1.4
description: >
  Delete property.
info: >
  26.1.4 Reflect.deleteProperty ( target, propertyKey )

  ...
  4. Return target.[[Delete]](key).
---*/

var o = {
  prop: 42
};

Reflect.deleteProperty(o, 'prop');

assert.sameValue(o.hasOwnProperty('prop'), false);