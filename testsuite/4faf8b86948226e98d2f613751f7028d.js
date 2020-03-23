load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.10-0-10
description: with introduces scope - name lookup finds function parameter
flags: [noStrict]
---*/

  function f(o) {

    function innerf(o, x) {
      with (o) {
        return x;
      }
    }

    return innerf(o, 42);
  }

assert.sameValue(f({}), 42);
