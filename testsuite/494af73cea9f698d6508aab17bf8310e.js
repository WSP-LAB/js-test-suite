load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: Promise.race rejects on non-iterable argument
es6id: S25.4.4.3_A2.2_T2
author: Sam Mikes
description: Promise.race rejects if argument is not object or is non-iterable
flags: [async]
---*/

Promise.race(new Error("abrupt")).then(function () {
    $ERROR('Promise unexpectedly resolved: Promise.race(abruptCompletion) should throw TypeError');
}, function (err) {
    if (!(err instanceof TypeError)) {
        $ERROR('Expected TypeError, got ' + err);
    }
}).then($DONE, $DONE);

