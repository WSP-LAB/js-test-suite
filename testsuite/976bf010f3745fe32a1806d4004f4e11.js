load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.12
description: >
    Trap returns abrupt.
info: >
    [[OwnPropertyKeys]] ( )

    ...
    8. Let trapResultArray be Call(trap, handler, «target»).
    9. Let trapResult be CreateListFromArrayLike(trapResultArray, «‍String, Symbol»).
        7.3.17 CreateListFromArrayLike (obj [, elementTypes] )

        1. ReturnIfAbrupt(obj).
    ...
---*/

var p = new Proxy({}, {
    ownKeys: function() {
        throw new Test262Error();
    }
});

assert.throws(Test262Error, function() {
    Object.keys(p);
});
