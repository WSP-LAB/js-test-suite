load("924921a1ecafccfb4db6dd25ea7b14f2.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise prototype object is an ordinary object
es6id: S25.4.5_A1.1_T1
author: Sam Mikes
description: Promise prototype does not have [[PromiseState]] internal slot
---*/

assert.throws(TypeError, function() {
  Promise.call(Promise.prototype, function () {});
});
