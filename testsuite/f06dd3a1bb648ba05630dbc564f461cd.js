load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: Promise.all([]) is a Promise
es6id: 25.4.4.1_A2.1_T1
author: Sam Mikes
description: Promise.all returns a Promise
---*/

var p = Promise.all([]);
if (!(p instanceof Promise)) {
    $ERROR('Expected p to be a Promise');
}
