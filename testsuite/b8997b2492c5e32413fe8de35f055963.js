load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.3
description: >
    Trap returns abrupt.
info: >
    [[IsExtensible]] ( )

    ...
    8. Let booleanTrapResult be ToBoolean(Call(trap, handler, «target»)).
    9. ReturnIfAbrupt(booleanTrapResult).
    ...
---*/

var p = new Proxy({}, {
    isExtensible: function(t) {
        throw new Test262Error();
    }
});

assert.throws(Test262Error, function() {
    Object.isExtensible(p);
});
