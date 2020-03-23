load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: Promise.all([]) returns a promise for a new empty array
es6id: 25.4.4.1_A2.3_T1
author: Sam Mikes
description: Promise.all([]) returns a promise for an array
flags: [async]
---*/

var arg = [];

Promise.all(arg).then(function (result) {
    if(!(result instanceof Array)) {
        $ERROR("expected an array from Promise.all, got " + result);
    }
}).then($DONE, $DONE);
