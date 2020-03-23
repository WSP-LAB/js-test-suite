load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.10.4.1-2
description: >
    RegExp - the thrown error is SyntaxError instead of RegExpError
    when the characters of 'P' do not have the syntactic form Pattern
---*/

assert.throws(SyntaxError, function() {
  var regExpObj = new RegExp('\\');
});
