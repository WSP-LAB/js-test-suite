load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.values
description: Object.values should terminate if getting a value throws an exception
author: Jordan Harband
---*/

var trappedKey = {
    get a() {
        throw new RangeError('This error should be re-thrown');
    },
    get b() {
        $ERROR('Should not try to get the second element');
    }
};

assert.throws(RangeError, function () {
    Object.values(trappedKey);
});
