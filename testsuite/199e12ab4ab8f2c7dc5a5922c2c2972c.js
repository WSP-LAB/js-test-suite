load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: <LS> between chunks of one string not allowed
es5id: 8.4_A7.4
description: Insert <LS> between chunks of one string
---*/

assert.throws(ReferenceError, function() {
  eval("var x = asdf\u2029ghjk");
});
