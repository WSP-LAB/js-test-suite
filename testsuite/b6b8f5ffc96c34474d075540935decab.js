load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Call the comparefn passing undefined as the this value (step 13b)
es5id: 15.4.4.11_A8
description: comparefn tests that its this value is undefined
flags: [noStrict]
---*/

var global = this;
[2,3].sort(function(x,y) {
  "use strict";

  if (this === global) {
    $ERROR('#1: Sort leaks global');
  }
  if (this !== undefined) {
    $ERROR('#2: Sort comparefn should be called with this===undefined. ' +
          'Actual: ' + this);
  }
  return x - y;
});
