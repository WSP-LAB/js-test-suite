load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("233fe3a5db04108c7dc60ae1a937935c.js");
// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
   Promise.resolve
es6id: S25.4.4.5_A3.1_T1
author: Sam Mikes
description: Promise.resolve delegates to foreign thenable
includes: [PromiseHelper.js]
flags: [async]
---*/

var sequence = [];

var thenable = {
    then: function(onResolve, onReject) {
        sequence.push(3);
        checkSequence(sequence, "thenable.then called");

        assert.sameValue(this, thenable);

        onResolve('resolved');

        sequence.push(4);
        checkSequence(sequence, "after resolved");

        throw new Error('interrupt flow');

        sequence.push(4);
        checkSequence(sequence, "duplicate sequence point not pushed");
    }
};

sequence.push(1);
checkSequence(sequence, "no async calls yet");

var p1 = Promise.resolve(thenable);

sequence.push(2);
checkSequence(sequence, "thenable.then queued but not yet called");

p1.then(function (q) {
    sequence.push(5);
    checkSequence(sequence, "all done");

    assert.sameValue(q, 'resolved');

}).then($DONE, $DONE);
