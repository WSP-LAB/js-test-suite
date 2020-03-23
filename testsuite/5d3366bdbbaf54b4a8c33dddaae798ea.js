load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2016 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-white-space
description: >
  U+180E is no longer a Unicode `Space_Separator` symbol as of Unicode v6.3.0.
info: >
  String.prototype.trim ( )

  3. [...] The definition of white space is the union of |WhiteSpace| and
     |LineTerminator|.
---*/

assert.sameValue("_\u180E".trim(), "_\u180E");
assert.sameValue("\u180E".trim(), "\u180E");
assert.sameValue("\u180E_".trim(), "\u180E_");
