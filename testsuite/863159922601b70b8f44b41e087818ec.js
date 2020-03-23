load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    The BindingIdentifier of a SingleNameBinding witihn the FormalParameters of
    a non-generator MethodDefinition may be the `yield` keyword.
es6id: 14.3
flags: [noStrict]
---*/

var obj = {
  method(yield) {
    return yield;
  }
};


assert.sameValue(obj.method('arg'), 'arg');
