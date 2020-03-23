load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.2.3
description: >
    The Set prototype object is the intrinsic object %SetPrototype%.
    The value of the [[Prototype]] internal slot of the Set prototype
    object is the intrinsic object %ObjectPrototype% (19.1.3). The Set
    prototype object is an ordinary object. It does not have a
    [[SetData]] internal slot.
---*/

assert.sameValue(
    Object.getPrototypeOf(Set.prototype),
    Object.prototype,
    "`Object.getPrototypeOf(Set.prototype)` returns `Object.prototype`"
);
