load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Mapped arguments object with non-configurable property
description: >
    Mapped value is not changed when property was made non-configurable.
flags: [noStrict]
---*/

function argumentsNonConfigurable(a) {
  Object.defineProperty(arguments, "0", {configurable: false});

  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);
}
argumentsNonConfigurable(1);
