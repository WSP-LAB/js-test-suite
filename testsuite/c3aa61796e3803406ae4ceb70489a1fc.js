load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.values
description: Object.values does not see a new element added by a getter that is hit during iteration
author: Jordan Harband
---*/

var bAddsC = {
    a: 'A',
    get b() {
        this.c = 'C';
        return 'B';
    }
};

var result = Object.values(bAddsC);

assert.sameValue(Array.isArray(result), true, 'result is an array');
assert.sameValue(result.length, 2, 'result has 2 items');

assert.sameValue(result[0], 'A', 'first value is "A"');
assert.sameValue(result[1], 'B', 'second value is "B"');
