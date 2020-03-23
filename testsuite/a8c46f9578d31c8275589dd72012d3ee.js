load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-58-s
description: >
    checking 'this' (Injected getter)
---*/

var o = {};
Object.defineProperty(o, "foo",  { get: function() { return this; } });

assert.sameValue(o.foo, o, 'o.foo');
