load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.13
description: >
    [[Call]] (thisArgument, argumentsList)

    2. If handler is null, throw a TypeError exception.
---*/


var p = Proxy.revocable(function() {}, {});

p.revoke();

assert.throws(TypeError, function() {
    p.proxy();
});
