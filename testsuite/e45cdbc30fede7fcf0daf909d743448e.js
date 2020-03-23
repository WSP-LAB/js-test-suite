load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
load("196e1c74d53e52fcbcaac4843b44bb60.js");
// Copyright (C) 2016 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-function.prototype.tostring
description: Function.prototype.toString on bound function exotic objects
includes: [nativeFunctionMatcher.js]
---*/

let f = function(){}.bind(null);

assert(NATIVE_FUNCTION_RE.test("" + f), "looks pretty much like a NativeFunction");
