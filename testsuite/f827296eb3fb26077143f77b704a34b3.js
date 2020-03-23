load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 14.1-10-s
description: other directives - may follow 'use strict' directive
flags: [noStrict]
---*/

  function foo()
  {
     "use strict";
     "bogus directive";
     return (this === undefined);
  }

assert(foo.call(undefined));
