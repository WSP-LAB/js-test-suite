load("bf4b12814bc95f34eeb130127d8438ab.js");
load("93fae755edd261212639eed30afa2ca4.js");
// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 21.1.2.4
description: >
    When used as a tag function of a tagged template, `String.raw` should
    return the "raw" representation of the template.
---*/

assert.sameValue(
  String.raw`\u0065\`\r\r\n\n${'test'}check`,
  '\\u0065\\`\\r\\r\\n\\ntestcheck',
  'Unicode escape sequences'
);
assert.sameValue(
  String.raw`\\
\
`,
  '\\\n\\\n\\\n',
  'Literal characters'
);
