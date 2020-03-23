load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    'u' entry's presence is determined by `u` flag
es6id: 21.2.5.3
info: >
    21.2.5.3 get RegExp.prototype.flags

    [...]
    13. Let unicode be ToBoolean(Get(R, "unicode")).
    14. ReturnIfAbrupt(unicode).
    15. If unicode is true, append "u" as the last code unit of result.
---*/

var flags;

flags = /./.flags;
assert.sameValue(flags.length, 0);

flags = /./u.flags;
assert.sameValue(flags.length, 1);
assert.sameValue(flags[0], 'u');
