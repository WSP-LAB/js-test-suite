load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 25.2.4.2
description: >
    Whenever a GeneratorFunction instance is created another ordinary object is
    also created and is the initial value of the generator function’s prototype
    property.
---*/

assert.sameValue(typeof function*() {}.prototype, 'object');
