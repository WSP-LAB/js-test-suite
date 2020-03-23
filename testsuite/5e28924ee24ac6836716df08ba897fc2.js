load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Non-hexadecimal value within the delimiters of a UnicodeEscapeSequence
es6id: 21.2.1
negative:
  phase: early
  type: SyntaxError
---*/

/\u{1,}/u;
