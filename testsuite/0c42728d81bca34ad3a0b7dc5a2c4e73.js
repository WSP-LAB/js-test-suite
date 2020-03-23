load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    PerformPromiseThen
    Ref 25.4.5.3.1
es6id: S25.4.5.3_A4.1_T1
author: Sam Mikes
description: Promise.prototype.then accepts 'undefined' as arg1, arg2
flags: [async]
---*/

var obj = {};
var p = Promise.resolve(obj);

p.then(undefined, undefined)
    .then(function (arg) {
        if (arg !== obj) {
            $ERROR("Expected resolution object to be passed through, got " + arg);
        }
    }).then($DONE, $DONE);
