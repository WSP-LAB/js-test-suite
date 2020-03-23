load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-ecmascript-function-objects-call-thisargument-argumentslist
es6id: 9.2.1
description: Error when invoking a class constructor
info: |
  [...]
  2. If F's [[FunctionKind]] internal slot is "classConstructor", throw a
     TypeError exception.
features: [class]
---*/

class C {}

assert.throws(TypeError, function() {
  C();
});
