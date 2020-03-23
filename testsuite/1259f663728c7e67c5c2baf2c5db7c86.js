load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("233fe3a5db04108c7dc60ae1a937935c.js");
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
es6id: S25.4.4.3_A6.1_T1
author: Sam Mikes
description: Promise.race([1]) settles immediately
includes: [PromiseHelper.js]
flags: [async]
---*/

var sequence = [];

var p = Promise.race([1]);

sequence.push(1);

p.then(function () {
    sequence.push(4);
    checkSequence(sequence, "This happens second");
}).catch($DONE);

Promise.resolve().then(function () {
    sequence.push(3);
    checkSequence(sequence, "This happens first");
}).then(function () {
    sequence.push(5);
    checkSequence(sequence, "This happens third");
}).then($DONE, $DONE);

sequence.push(2);
