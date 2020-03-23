load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.10
description: >
    [[Delete]] (P)

    The result is a Boolean value.
---*/

var p = new Proxy({}, {
    deleteProperty: function() {
        return 1;
    }
});

assert.sameValue(Reflect.deleteProperty(p, "attr"), true);
