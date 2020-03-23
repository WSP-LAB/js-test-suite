load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Mapped arguments object with non-configurable property
description: >
    Mapped arguments property is changed to non-configurable and
    non-writable. Perform property attribute changes with two
    consecutive [[DefineOwnProperty]] calls. Mapped values are
    unchanged, mapping itself is removed.
flags: [noStrict]
---*/

function argumentsNonConfigurableThenNonWritable(a) {
  Object.defineProperty(arguments, "0", {configurable: false});
  Object.defineProperty(arguments, "0", {writable: false});
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);

  // Postcondition: Arguments mapping is removed.
  a = 2;
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 1);
}
argumentsNonConfigurableThenNonWritable(1);
