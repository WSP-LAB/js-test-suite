load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise.all with 0-element array
    should accept an empty array
es6id: S25.4.4.1_A6.1_T2
author: Sam Mikes
description: Promise.all([]) returns a promise for an empty array
flags: [async]
---*/

var p = Promise.all([]);

p.then(function (result) {
    if (!(result instanceof Array)) {
        $ERROR("Expected Promise.all([]) to be Array, actually " + result);
    }
    if (result.length !== 0) {
        $ERROR("Expected Promise.all([]) to be empty Array, actually " + result);
    }
}).then($DONE, $DONE);
