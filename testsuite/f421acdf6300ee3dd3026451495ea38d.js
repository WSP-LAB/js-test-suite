load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.10-0-7
description: with introduces scope - scope removed when exiting with statement
flags: [noStrict]
---*/

  var o = {foo: 1};

  with (o) {
    foo = 42;
  }

  try {
    foo;
    throw new Error();
  }
  catch (e) {
    assert(e instanceof ReferenceError);
  }
