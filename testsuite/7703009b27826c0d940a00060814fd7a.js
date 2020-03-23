load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Out-of-range value of hexadecimal digits in UnicodeEscapeSequence
es6id: 21.2.1.1
info: >
    21.2.1.1 Static Semantics: Early Errors

    RegExpUnicodeEscapeSequence :: u{ HexDigits }

        - It is a Syntax Error if the MV of HexDigits > 1114111.
negative:
  phase: early
  type: SyntaxError
---*/

/\u{110000}/u;