load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 25.2
description: >
    When a generator function is invoked as a method of an object, its context
    is that object.
---*/

var context;
function* g() { context = this; }
var obj = { g: g };
var iter = obj.g();

iter.next();

assert.sameValue(context, obj);