load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.3.3.1.1
description: >
    Runtime Semantics: EvaluateNew(constructProduction, arguments)

    ...
    8. If IsConstructor (constructor) is false, throw a TypeError exception.
    ...

---*/

assert.throws(TypeError, function() { new (() => {}); });
