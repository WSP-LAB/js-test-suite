load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.4
description: >
    If boolean trap result if false, return false.
features: [Reflect]
---*/

var target = {};
var p = new Proxy({}, {
    preventExtensions: function(t) {
        return 0;
    }
});

assert.sameValue(Reflect.preventExtensions(p), false);

Object.preventExtensions(target);

assert.sameValue(Reflect.preventExtensions(p), false);
