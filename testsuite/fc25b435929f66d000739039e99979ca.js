load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("233fe3a5db04108c7dc60ae1a937935c.js");
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
   Promise.resolve
es6id: S25.4.4.5
author: Sam Mikes
description: Promise.resolve delegates to foreign thenable
includes: [PromiseHelper.js]
flags: [async]
---*/

var sequence = [];

var thenable = {
    then: function(onResolve, onReject) {
        return onResolve('resolved');
    }
};

var p = Promise.resolve(thenable);

p.then(function (r) {
    assert.sameValue(r, 'resolved');
}).then($DONE, $DONE);
