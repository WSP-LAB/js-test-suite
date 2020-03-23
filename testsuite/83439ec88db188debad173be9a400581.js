load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.12
description: >
    [[OwnPropertyKeys]] ( )

    7. If trap is undefined, then Return target.[[OwnPropertyKeys]]()
---*/

var target = {
    foo: 1,
    bar: 2
};
var p = new Proxy(target, {});

var keys = Object.keys(p);

assert.sameValue(keys[0], "foo");
assert.sameValue(keys[1], "bar");

assert.sameValue(keys.length, 2);
