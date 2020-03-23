load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) Copyright 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 21.2.5.15
description: >
    `unicode` property descriptor
info: >
    RegExp.prototype.unicode is an accessor property whose set accessor
    function is undefined.
---*/

var desc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'unicode');

assert.sameValue(desc.set, undefined);
assert.sameValue(typeof desc.get, 'function');
